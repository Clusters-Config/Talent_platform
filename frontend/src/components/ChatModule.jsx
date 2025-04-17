import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SectionChat from "./SectionChat";


const ChatModule = () => {
    
    const [msg, setMsg] = useState(null)
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState("")
    console.log(messages)
    
    useEffect(() =>{ 
        const msg = new WebSocket('ws://localhost:8080')
        msg.onopen = () => { 
            console.log('Connected')
            setMsg(msg)
        }
        msg.onmessage = (event) => { 
            setMessages((prevMessages) => [...prevMessages, event.data])
        }
        msg.onclose = (err) => {   
            console.log('Disconnected' + err)
        }

},[])
    
    return (
        <motion.div 
            className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Enter your message" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <button 
                className="w-full px-4 py-3  bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300"
                onClick={() => {
                    if (msg && inputValue.trim()) {
                        msg.send(inputValue)
                        setInputValue("")
                    }
                }}
            >
                Send
            </button>
            <SectionChat community='React Js' members='2332'/>
            <div className="mt-6 space-y-4">
                {messages.map((message, index) => (
                    <motion.div 
                        key={index} 
                        className="p-4 bg-gray-200 rounded-md shadow-sm"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {message}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default ChatModule;