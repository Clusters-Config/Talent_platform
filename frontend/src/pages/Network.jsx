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
      <div className="container px- sm:px-5 flex sm:flex sm:justify-start gap-5 flex-wrap dark:bg-gray-900  ">
      <h2 className="text-2xl font-semibold mb-4 text-center mt-[60px] ml-[390px] dark:bg-gray-900 dark:text-white  ">Connect with Talents</h2>\t
      <p className="text-xl font-semibold mb-4 text-center mt-[-20px] ml-[320px] dark:bg-gray-900 dark:text-white"><h4>The only way to have a friend is to be one</h4></p>
        <div className="network-cards-container w-[750px] h-fit bg-gray-100 mt-[80px] ml-[-590px] dark:bg-gray-600 rounded-lg shadow-md p-5 grid grid-cols-3 gap-4 ">
          
          {networkData && networkData.map((person, index) => (
            <NetworkCard 
              key={index}
              name={person.title}
              domain={person.employment}
              onAddFriend={handleAddFriend}
            />
          ))}
        </div>
        <div className="chat-container  rounded-lg   dark:bg-gray-900 w-90 h-[600px] mt-[200px]  shadow-md">
          <CommunityChat />
        </div>
        </div>
    </>
  );
}

export default Network;
