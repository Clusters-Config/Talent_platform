import { useEffect, useState } from "react"

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
    return(
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Chat Module</h1>
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Enter your message" 
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => {
                    msg.send(inputValue)
                }}
            >
                Send
            </button>
            <div className="mt-4">
                {messages.map((message, index) => {
                    return (
                        <div key={index} className="p-2 bg-gray-200 rounded-md mb-2">
                            {message}
                        </div>
                    )
                })}
                    {/* <div className="p-2 bg-gray-200 rounded-md mb-2">
                        {messages}
            </div> */}
        </div>
    </div>
    )
}

export default ChatModule;