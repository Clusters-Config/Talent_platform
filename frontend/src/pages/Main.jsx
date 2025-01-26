import React, { useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';

const fetchData = async () => {
  try{
  const result = await axios.get('http://localhost:3001/getjob');
  console.log(result);
  } catch (error){
    console.log(error);
  }
};

const Main = () => {

  

  return (
    <>
      <Post title="Hiring Designers" content="This is the first post." name="FunWorld" position="designer"/>
      <Post title="Hiring Designers" content="Yet another post!" name="FunWorld" position="designer"/>
      <Post title="Hiring Designers" content="And one more for good measure." name="FunWorld" position="designer"/>
      <Post title="Hiring Designers" content="This is the first post." name="FunWorld" position="designer"/>
    </>
  );
};



export default Main;