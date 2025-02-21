import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CommunityChat = () => {
  const [msg, setMsg] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null); // No topic selected by default
  const [showChat, setShowChat] = useState(false);

  const topics = ["Artificial Intelligence", "Machine Learning", "Web Development", "Data Science", "Cloud Computing", "Cybersecurity", "Blockchain"];

  useEffect(() => {
    if (selectedTopic) {
      const ws = new WebSocket(`ws://localhost:8080/${selectedTopic.toLowerCase().replace(/\s+/g, '')}`);

      ws.onopen = () => {
        console.log("Connected to " + selectedTopic);
        setMsg(ws);
      };

      ws.onmessage = (event) => {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      };

      ws.onclose = (err) => {
        console.log("Disconnected from " + selectedTopic + err);
      };

      return () => {
        ws.close(); // Cleanup on unmount
      };
    }
  }, [selectedTopic]);

  const sendMessage = () => {
    if (msg && inputValue.trim()) {
      msg.send(inputValue);
      setInputValue("");
    }
  };

  // Filter messages based on selected topic
  const filteredMessages = messages.filter((message) =>
    message.toLowerCase().includes(selectedTopic?.toLowerCase() || "")
  );

  return (
    <motion.div
      className="p-6 dark:bg-gray-700 rounded-lg shadow-lg mt-[-119px] max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-900 ">Open Source Community Chat</h2>
      <ul className="mb-4">
        {topics.map((topic) => (
          <li
            key={topic}
            className={`px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 cursor-pointer ${
              selectedTopic === topic ? "bg-gray-200 font-semibold" : ""
            }`}
            onClick={() => {
              setSelectedTopic(topic);
              setShowChat(true);
            }}
          >
            {topic}
          </li>
        ))}
      </ul>

      {selectedTopic && (
        <>
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
            className="w-full px-4 py-3 bg-blue-500 dark:text-white text-white rounded-md hover:bg-blue-600 transition duration-300"
            onClick={sendMessage}
          >
            Send
          </button>
          <div className="mt-6 space-y-4">
            {filteredMessages.map((message, index) => (
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
        </>
      )}
    </motion.div>
  );
};

export default CommunityChat;
