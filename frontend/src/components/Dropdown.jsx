import React, { useState, useEffect } from "react";
import { useRef } from "react";
import LogoutModal from "./LogoutModal";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

function showUsername(){ 
    return localStorage.getItem('username')
}

const Dropdown = () => {
    const [username] = useState(showUsername());
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false); 
    const dropdownRef = useRef(null);
    const [userNameColor, setUserNameColor] = useState("text-gray-700");
    const location = window.location.pathname;
    
    useEffect(() => {
        if (location === '/home') {
            setUserNameColor("text-gray-100");
        }
    }, [location]);

    const handleClick = () => { setVisible(!visible); };
    
    const handleClickOutside = (event) => { 
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setVisible(false); 
        } 
    }; 

    useEffect(() => { 
        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); }; 
    }, []);

    const handleLogoutClick = () => {
        setModalVisible(true); 
        setVisible(false); 
    };

    return (
        <div className="relative sm:mt-3" id="profileDropdown">
            <button id="profileButton" className="flex items-center" onClick={handleClick}>
                <Avatar sx={{ bgcolor: blue[500] }}></Avatar>
                <span className={`sm:${userNameColor}  mx-2 inline`}>{username}</span>
            </button>
            <div id="dropdownMenu" ref={dropdownRef} className={`${visible ? 'block' : 'hidden'} space-y-4 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg`}>
                <Link to="/profile" target="_self" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogoutClick}>Logout</a>
            </div>
            {modalVisible && <LogoutModal setVisible={setModalVisible} />}
        </div>
    )
}

export default Dropdown;
