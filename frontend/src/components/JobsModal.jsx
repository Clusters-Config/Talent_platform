import React from 'react';

const JobsModal = ({ modalVisible, jobDetails, setModalVisible }) => {
  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div
        className={`bg-gray-300 ${
          modalVisible ? "block" : "hidden"
        } w-full h-full fixed top-0 left-0 bg-opacity-50 z-50`}
      >
        <div className="bg-white w-1/2 h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-xl font-bold">Job Details</h1>
            <button
              className="text-red-500 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold">{jobDetails.title}</h2>
            <p className="text-gray-600">{jobDetails.position}</p>
            <p className="text-gray-600">{jobDetails.name}</p>
            <p className="text-gray-600">{jobDetails.content}</p>
          </div>
          <div className="flex justify-end items-center border-t pt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsModal;