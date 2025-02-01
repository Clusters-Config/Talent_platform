import React from 'react';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Post = ({ content,name, position,title }) => {
  const [Like,setLike]=useState(0);
  const [Comment,setComment]=useState(0);
  const [Share,setShare]=useState(0);
  return(
    <>
  
  <div role="status" className="lg:max-w-[50rem] lg:p-5 sm:p-4 sm:max-w-96 sm:h-[28rem] lg:mx-96 lg:my-8 border border-gray-200 rounded shadow  dark:border-gray-700 sm:mx-5 sm:my-4" >
    <div className="flex items-center justify-center h-44 mb-4 bg-gray-300 rounded dark:bg-gray-700">
      <svg className="w-10 h-10 text-gray-200 dark:text-gray-600 sm:mt-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
      </svg>
    </div>
    <div className="flex font-bold aleo-regular flex-col gap-1">
    <div className="h-auto  p-2 w-48 sm:mx-3">
      {title}
    </div>
    <div className="h-auto mb-2.5 mx-4 sm:p-3">
     {content}
    </div>
    <div className="flex items-center gap- mx-4 mt-5">
      <svg className="w-10 h-10 me-3  text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
      <div>
        <div className="w-[57vh] bg-gray-200 font-bold rounded-full dark:bg-gray-700 px-2 mb-2 sm:text-[16px] sm:h-5 sm:w-[30vh]">
          {name}
        </div>
        <div className=" px-2 font-bold bg-gray-200 rounded-full dark:bg-gray-700 sm:text-[14px] sm:w-[33vh] sm:h-5">
          {position}
        </div>
      </div>
    </div>
      <div
      className='flex justify-between mx-4 mt-5 w-auto h-auto sm:mt-10'>
        <FavoriteIcon className="text-gray-200 hover:text-red-600 transition-colors duration-300  dark:text-gray-700 cursor-pointer" onClick={setLike} />
        <ChatBubbleIcon className="text-gray-200  dark:text-gray-700 cursor-pointer" onClick={setComment} />
        <SendRoundedIcon className="text-gray-200  dark:text-gray-700 cursor-pointer" onClick={setShare}/>
      </div>
  </div>
  </div>
  </>
  )
};

export default Post;

