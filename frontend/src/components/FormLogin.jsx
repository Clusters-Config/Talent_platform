import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const FormLogin = ({children}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const notify = () => toast("Login failed");

    async function loginUser(event) {
		event.preventDefault();
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }, {
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            if (username === '' || password === '') {
            alert("Please enter your username and password");
            } else {
            navigate("/");
            }
        })
        .catch((error) => {
           notify();
        });
        
	}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button
                    onClick={loginUser}
                    className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
                >
                    Login
                </button>
                 {children}
                <ToastContainer />
            </div>
        </div>
    );
};

export default FormLogin;