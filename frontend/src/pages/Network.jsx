
import React from 'react'
import useNet from '../hooks/useNet'  
import NetworkCard from '../components/NetworkCard'


const Network = () => {
  const data = useNet();

  return (
    <>
    
      <div className="container px-16 flex gap-5 flex-wrap justify-evenly">
       
        {data.map((person, index) => (
          <NetworkCard
            key={index}
            name={person.title}
            domain={person.employment}
            className="w-full m-2 md:w-1/2 lg:w-1/4 p-4"/>
        ))}
      </div>
    
    </>
  );
}

export default Network