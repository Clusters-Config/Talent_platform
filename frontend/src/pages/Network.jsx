import React from 'react'
import useNet from '../hooks/useNet'  
import NetworkCard from '../components/NetworkCard'


const Network = () => {
  const data = useNet();


async function connection (objectId) { 
  try{
    const response = axios.patch('http://localhost:5000/api/v1/connections', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        params:{ 
            id: objectId,
            title: data.title
        },
    }
    )
    console.log(response)
  }
  catch (error) {
    console.error(error);
  }
}
  return (
    <>
    
      <div className="container px-16 sm:px-5 flex sm:justify-start gap-5 flex-wrap justify-evenly">
       
        {data.map((person, index) => (
          <NetworkCard
            key={index}
            name={person.title}
            domain={person.employment}
            />
        ))}
      </div>
    
    </>
  );
}

export default Network