import React, { useEffect } from 'react';
import Post from '../components/Post';
import useJob from '../hooks/useJob';



const Main = () => {
     const data = useJob();
     console.log(data);

  return (
    <>
       {data.map((post) => (
         <Post title={post.title}  position={post.position} organization={post.name} />
       ))}
    </>
  );
};



export default Main;