import React from 'react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      <div className="p-6 sm:p-2 flex flex-col h-full sm:h-fit">
        <div className="flex items-center mb-4">
          <img
            src={candidate.imageUrl}
            alt={candidate.name}
            className="w-12 h-12 sm:w-8 sm:h-8 rounded-full mr-4 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold sm:text-[18px] text-gray-800 dark:text-gray-200">
              {candidate.name}
            </h2>
            <h3 className="text-gray-600 sm:text-[14px] text-sm dark:text-gray-400">
              {candidate.headline}
            </h3>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2 sm:hidden">
          {candidate.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm sm:text-[10px] font-medium mr-2 mb-1"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex-grow mb-4">
          <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm">
            Experience: <span className="font-medium">{candidate.experience}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm">
            Availability: <span className="font-medium">{candidate.availability}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:line-clamp-3">
            {candidate.summary}
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-600 mt-auto">
        <button className="w-full bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;