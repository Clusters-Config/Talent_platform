import React from 'react'
import { useState, useEffect } from 'react';
import useNet from '../hooks/useNet';
import NetworkCard from '../components/NetworkCard';
import CommunityChat from '../components/ChatModule';
import axios from 'axios';

const Network = () => {
  const data = useNet();
  const [connections, setConnections] = useState([]);
  const [networkData, setNetworkData] = useState(data);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const userId = localStorage.getItem('id');
        const response = await axios.get(`http://localhost:3001/connections/${userId}`);
        setConnections(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching connections:", error);
        setConnections([]);
      }
    };

    fetchConnections();
  }, []);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(person => !connections.some((connection) => connection.name === person.title));
      setNetworkData(filteredData);
    }
  }, [data, connections]);

  const handleAddFriend = (friendName) => {
    setNetworkData((prevData) => {
      const filtered = prevData.filter(person => person.title !== friendName)
      return filtered;
    });
  };

  return (
    <>
      <div className="container px- sm:px-5 flex sm:flex sm:justify-start gap-5 flex-wrap dark:bg-gray-900 ">
      <h2 className="text-2xl font-semibold mb-4 text-center mt-[60px] dark:bg-gray-900">Connect with Talents</h2>
        <div className="network-cards-container w-[750px] bg-gray-100 dark:bg-gray-600 rounded-lg shadow-md p-5 grid grid-cols-2 gap-4 mt-[200px] ml-[-200px]">
          
          {networkData && networkData.map((person, index) => (
            <NetworkCard 
              key={index}
              name={person.title}
              domain={person.employment}
              onAddFriend={handleAddFriend}
            />
          ))}
        </div>
        <div className="chat-container border rounded-lg bg-white w-96">
          <CommunityChat />
        </div>
        </div>
      </div>
    </>
  );
}

export default Network;
