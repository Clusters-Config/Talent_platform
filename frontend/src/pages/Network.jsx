import React from 'react'
import { useState, useEffect } from 'react';
import useNet from '../hooks/useNet';
import NetworkCard from '../components/NetworkCard';
import CommunityChat from '../components/ChatModule';
import axios from 'axios';
import Loading from '../components/Loading';

const Network = () => {
  const data = useNet();
  const [connections, setConnections] = useState([]);
  const [networkData, setNetworkData] = useState(data);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddFriend = (friendName) => {
    setNetworkData((prevData) => {
      const filtered = prevData.filter(person => person.title !== friendName)
      return filtered;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
    <>
      <div className="container px- sm:px-5 flex sm:flex sm:justify-start gap flex-wrap ">
        <div className='flex justify-between gap-[8rem]'>
          
        <div className="network-cards-container ml-[4rem] w-[750px] bg-gray-100 rounded-lg shadow-md p-5 grid grid-cols-2 gap-4">
          
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
