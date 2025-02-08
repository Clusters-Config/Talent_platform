import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobsModal = ({ modalVisible, jobDetails, setModalVisible }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setModalVisible(false);
  };
  const handleApply=()=>{
    navigate('/skilltest')
  }

  return (
    <>
      <div
        className={`bg-gray-300 ${
          modalVisible ? "block" : "hidden"
        } w-full h-full fixed top-0 bg-opacity-50 z-50`}
      >
        <div
          className={`bg-white sm:w-10/12 sm:mt-[-9rem] md:w-1/2 xl:w-6/12 lg:w-2/4  md:h-1/2 xl:h-[345px] lg:h-[390px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 rounded-lg shadow-lg sm:h-11/12 sm:top-1/2`}
        >
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-xl font-bold sm:text-[18px]">Job Details</h1>
            <button
              className="text-red-500 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
          <div className="p-4 sm:p-2">
            <h2 className="text-lg font-bold sm:text-[18px]">{jobDetails.title}</h2>
            <p className="text-gray-600 sm:text-sm">{jobDetails.name}</p>
            <p className="text-gray-600 sm:text-[14px]">{jobDetails.content}</p>
          </div>
          <div className="flex justify-end items-center border-t pt-4">
            <button
              className="bg-red-500 sm:w-[55px] sm:h-[30px] sm:text-sm sm:p-1 text-white px-4 py-2 rounded"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="bg-blue-500 sm:w-[55px] sm:h-[30px] sm:text-sm sm:p-1 text-white px-4 py-2 rounded ml-4"
              onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsModal;