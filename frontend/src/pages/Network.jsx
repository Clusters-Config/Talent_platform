import React from 'react'
import useNet from '../hooks/useNet'  
import NetworkCard from '../components/NetworkCard'
import ChatModule from '../components/ChatModule'

const Network = () => {
  const data = useNet();

  return (
    <>
    
      <div className="container px-16 sm:px-5 flex sm:flex sm:justify-start gap-5 flex-wrap justify-evenly">
       
        {data.map((person, index) => (
          <NetworkCard
            key={index}
            name={person.title}
            domain={person.employment}
            />
        ))}
        
        <ChatModule/>
      </div>
    
    </>
  );
}

export default Network