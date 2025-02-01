import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar =  () =>{ 
    const [showMenu, setShowMenu] = useState(false);
    const MenuRef =useRef(null);
    const handleShowMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    }

     const handleClickOutside = (event) => { 
            if (MenuRef.current && !MenuRef.current.contains(event.target)) {
                setShowMenu(false); 
            } 
        }; 
    
        useEffect(() => { 
            document.addEventListener('mousedown', handleClickOutside);
            return () => { document.removeEventListener('mousedown', handleClickOutside); }; 
        }, []);

    useEffect(() => {
        setShowMenu(false);
    }, [window.location.pathname]);

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md aleo-regular z-50 select-none">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-4xl text-black font-semibold hover:text-indigo-600">TALENTMATCH</Link>
                <span className="lg:hidden" onClick={handleShowMenu}><MenuRoundedIcon/></span>

                <div ref={MenuRef} className={`lg:hidden fixed top-0 right-0 bg-white shadow-md p-4 w-64 z-10 transition-all duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button className="absolute top-4 right-4" onClick={handleShowMenu}>
                        <CloseIcon />
                    </button>
                    <div className="flex flex-col">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                            <HomeIcon className="mr-2" />
                            Home
                        </Link>
                        <Link to="/login" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                            <LoginIcon className="mr-2" />
                            Login
                        </Link>
                        <Link to="/findtalent" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                            <WorkIcon className="mr-2" />
                            Find Talent
                        </Link>
                        <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                            <PeopleIcon className="mr-2" />
                            Jobs
                        </Link>
                        <Link to="/network" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                            <PeopleIcon className="mr-2" />
                            Network
                        </Link>
                        <Link to="/Notifications" className="text-gray-700 hover:text-indigo-600 py-2 flex items-center">
                            <NotificationsIcon className="mr-2" />
                            Notifications
                        </Link>
                        
                        {<Dropdown/>}
                    </div>
                </div>

                <div className="lg:flex hidden lg:flex-row lg:justify-end lg:items-center">
                    <Link to="/" className="text-gray-700 hover:text-indigo-600 block py-2 lg:mr-4">Home</Link>
                    <Link to="/login" className="text-gray-700 hover:text-indigo-600 block py-2 lg:mr-4">Login</Link>
                    <Link to="/findtalent" className="text-gray-700 hover:text-indigo-600 block py-2 lg:mr-4">Find Talent</Link>
                    <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 block py-2 lg:mr-4">Jobs</Link>
                    <Link to="/network" className="text-gray-700 hover:text-indigo-600 block py-2 lg:mr-4">Network</Link>
                    <Link to="/Notifications" className="text-gray-700 hover:text-indigo-600 block py-2 lg:mr-4">Notifications</Link>
                    <div className="lg:flex lg:flex-row lg:justify-end lg:items-center">
                        <Dropdown/>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;