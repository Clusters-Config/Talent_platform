import React from 'react';

const NotificationsSkeleton = () => {
  const NotificationData = [
    { title: "Liked your post", content: "Hello connections..............." },
    { title: "Commented to your post", content: "Hello connections..............." },
    { title: "Liked your post", content: "Hello connections..............." },
    { title: "Posted a job role", content: "Hello connections..............." },
    { title: "Liked your post", content: "Hello connections..............." },
    { title: "Liked your post", content: "Hello connections..............." },
  ];

  return (
    <div
    //   role="status"
    //   className="max-w-xl ml-40 p-4 space-y-4 border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 md:p-6 dark:border-gray-700 h-96 overflow-y-auto"
    >
      {NotificationData.map((_, index) => (
        <div key={index} className="flex flex-col max-w-xl mx-[30%] items-center justify-between p-4 border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 mb-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsSkeleton;