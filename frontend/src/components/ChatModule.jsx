import { useEffect, useState } from "react"

const ChatModule = () => {
    const [msg, setMsg] = useState(null)
    const [messages, setMessages] = useState([])
    useEffect(() =>{ 
        const msg = new WebSocket('ws://localhost:8080')
        msg.onopen = () => { 
            console.log('Connected')
            setMsg(msg)
        }
        msg.onmessage = (event) => { 
            setMessages((prevMessages) => [...prevMessages, event.data])
        }
        return(()=>{ 
            msg.close()
        })
},[])
    return(
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Chat Module</h1>
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Enter your message" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setMessages(e.target.value)}
                />
            </div>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => {
                    console.log(messages)
                    msg.send(messages)
                }}
            >
                Send
            </button>
        </div>
    )
}

export default ChatModule;