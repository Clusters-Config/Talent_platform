import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ setVisible }) => { 
    const navigate = useNavigate();
    const modalRef = useRef(null);

    const handleClick = () => { setVisible(false); }; 

    async function logout () { 
        try {
            const response = await axios.post('http://localhost:3001/logout');
            console.log(response);
            console.log(response.data);
            if(response.data.granted === false) {
                console.log("User not logged out");
                 localStorage.removeItem('token');
                 localStorage.removeItem('username');
                 localStorage.removeItem('id');
                 console.log(localStorage);
                 navigate('/login');
            }
        } catch (err) {
            console.log("An error occurred while logging out", err);
        }
    }

    const handleLogout = () => {
        // Logout logic here
        logout();
        setVisible(false); 
    }

    return (
        <>
            <div id="popup-modal" tabIndex="-1" ref={modalRef} className="block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to logout?</h3>
                            <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={handleLogout}>
                                Logout
                            </button>
                            <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500" onClick={handleClick}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 bg-black opacity-30"></div>
        </>
    );
}

export default LogoutModal;