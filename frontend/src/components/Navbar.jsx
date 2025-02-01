import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar =  () =>{ 
    return (
        <>
<nav className="fixed top-0 left-0 right-0 bg-white shadow-md aleo-regular z-50 select-none">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link to="/" className="text-4xl text-black font-semibold hover:text-indigo-600">TALENTMATCH</Link>

            <div className="flex items-center space-x-6">
                <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                <Link to="/findtalent" className="text-gray-700 hover:text-indigo-600"> <i className="fas fa-briefcase mr-1"></i>
                Find Talent</Link>
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600"><i className="fas fa-users mr-1"></i>
                Jobs</Link>
                <Link to="/network" className="text-gray-700 hover:text-indigo-600"><i className="fas fa-users mr-1"></i>
                Network</Link>
                <Link to="/Notifications" className="text-gray-700 hover:text-indigo-600"><i className="fas fa-bell mr-1"></i>
                Notifications</Link>
                {<Dropdown/>}
            </div>
            </div>
    </nav>
    </>
    )
}

export default Navbar;