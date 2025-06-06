import { useState,useEffect } from 'react'
import Button from "../components/Button";
import  axios from "axios";
import { useNavigate } from 'react-router-dom';
import Formback from "../components/Formback";
import Loading from '../components/Loading';

const Register =() =>{ 
    const navigate =useNavigate()
    const [firstname,setfirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [register,setRegister] = useState(false)
    const [loading, setLoading] = useState(true);
    
    function registerUser   (){ 

        axios.post("http://localhost:3001/signup",{
            firstname:firstname,
            lastname:lastname,
            username:username,
            password:password
        },{ 
            headers:{
               "Content-Type": "application/json",
            }
        })
        .then((response)=>{

           console.log(response.data.token)
           const jwt=localStorage.setItem("token",`Bearer ${response.data.token}`)
              setRegister(true)
              navigate('/login')
        })
        .catch((err)=>{ 
            console.log("Error in the login")
        })
    }

   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen  dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

    return ( 
        
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center">
            <Formback/>
            <h1 className="text-2xl aleo-regular text-center">Register</h1>
            <div className="flex flex-col items-center  mt-10 pl-16 p-5 border ">
              <input className='m-4 rounded' type="text" onChange={(e)=>{setfirstname(e.target.value)}} placeholder="firstname"/>
              <input className='m-2 rounded' type="text" onChange={(e)=>{setLastname(e.target.value)}} placeholder="lastname"/>
              <input className='m-2 rounded' type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="username"/>
              <input className='m-2 rounded' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
              {<Button title="Register" onClick={registerUser  }/>}
            </div>
          </div>
       
    )

}


export default Register;
