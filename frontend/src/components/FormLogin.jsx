import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Button from "./Button";


const FormLogin = ({children}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const notify = () => toast("Login failed");
    const notify2 = () => toast("User does not exist");
    const notify3 =()=> toast("Username or Password is incorrect")

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
            if (username !== '' || password !== '') {
                if (response.data.granted) {
                    localStorage.setItem("id", response.data.id);   
                    localStorage.setItem("token", `Bearer ${response.data.token}`);
                    localStorage.setItem("username", response.data.username);
                    navigate("/");
                }
                else if (response.data.username != username || response.data.password != password) {
                    notify3();
                }
                else {
                    notify2();
                }
            } else {
                toast("Please enter your username and password");
            }
        })
            .catch((error) => {
                notify();
            });

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen z-40">
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
                <div className="flex justify-center">
                <Button
                 title='Login'
                    onClick={loginUser}
                    className="bg-blue-500 text-white p-4 px-4 rounded w-full hover:bg-blue-600"
                />
                 
                 {children}
                 </div>
                <ToastContainer className="z-"/>
            </div>
        </div>
    );
};

export default FormLogin;