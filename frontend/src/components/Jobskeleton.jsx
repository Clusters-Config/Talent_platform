import React from 'react';

const Jobskeleton= ({ content,position,organisation}) => {


  return(
    <div>
      <div role="status" className="p-4 mx-[17rem] sm:mx-[1rem] my-[0.7rem] border border-gray-200 rounded shadow md:p-6 dark:border-gray-700">
          <div className="flex font-bold w-auto flex-col">
                <div className="h-auto aleo-semibold text-2xl p-2 w-60 text-start ">
                  {position}
                </div>
                <div className="h-auto aleo-regular text-ellipsis mb-2.5 mx-2 text-justify">
                  {content}
                </div>
                <div className="flex flex-row-reverse w-auto mx-4 mt-3">
                  <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div className=" bg-gray-200 font-bold  mt-2 rounded-full dark:bg-gray-700 px-2 mb-2">
                        {organisation}
                    </div>
              </div>
          </div>
      </div>
      </div>
  )
};

export default Jobskeleton;
