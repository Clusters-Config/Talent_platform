import React, { useState, useEffect, useRef, useCallback } from "react";
import Userimage from "../assets/user.jpg";

import axios from "axios";
import Button from "./Button";

async function connection(name, id) {
    try {
        const response = await axios.patch(`http://localhost:3001/connect/${id}/${name}`);
        if (response.status === 200) {
            console.log('Connection successful');
        }
        else {
            console.log('Connection failed');
        }
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function disconnect(name, id) {
    try {
        const response = await axios.patch(`http://localhost:3001/disconnect/${id}/${name}`);
        console.log({ response });
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

const NetworkCard = ({ name, domain, onAddFriend }) => {
    const [visible, setVisible] = useState(false);
    const [buttonText, setButtonText] = useState("Add friend");
    const [isConnected, setIsConnected] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setVisible(!visible);
    };

    const handleAddFriend = (name) => {
        connection(name, localStorage.getItem('id'));
        setIsConnected(true);
        setButtonText("Added");
        setTimeout(() => {
            setButtonText("Add friend");
        }, 2000);
    };

    const handleRemoveFriend = (name) => {
        disconnect(name, localStorage.getItem('id'));
        onAddFriend(name); // Remove the card from the suggestion list
    };

    const handleClickOutside = useCallback(
        (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setVisible(false);
            }
        },
        [visible]
    );

    useEffect(() => {
        const fetchConnections = async () => {
            try {
                const userId = localStorage.getItem('id');
                const response = await axios.get(`http://localhost:3001/connections/${userId}`);
                const connections = Array.isArray(response.data) ? response.data : [];
                const isAlreadyConnected = connections.some((connection) => connection.name === name);
                setIsConnected(isAlreadyConnected);
            } catch (error) {
                console.error("Error fetching connections:", error);
            }
        };

        fetchConnections();

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-[17rem]  h-[18rem] sm:w-44 sm:h-fit sm:p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4 sm:pt-0">
                <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                    ref={dropdownRef}
                    onClick={handleClick}
                >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                    >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center">
                <img
                    className="w-24 sm:w-16 h-24 sm:h-16 mb-3 rounded-full shadow-lg"
                    src={Userimage}
                    alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl sm:text-lg font-medium text-gray-900 dark:text-white">
                    {name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {domain}
                </span>
                <div className="flex flex-wrap items-center mt-4 gap-4">
                    {isConnected ? (
                        <Button
                            title="Following"
                            className="inline-flex w-28 h-10 sm:w-3 sm:h-9 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        />
                    ) : (
                        <>
                            <Button
                                title={buttonText}
                                onClick={() => handleAddFriend(name)}
                                className="inline-flex w-28 h-10 sm:w-3 sm:h-9 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            />
                            <Button
                                title="Remove"
                                onClick={() => handleRemoveFriend(name)}
                                className="inline-flex p-3 w-20 h-10 sm:w-3 sm:h-9 items-center text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NetworkCard;
