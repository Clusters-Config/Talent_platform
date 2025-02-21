import React from 'react';

const Leaderboard = ({ skillTestResults }) => {
  return (
    <div className="container mx-auto p-4 pt-6 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-300 mb-4">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead className="bg-indigo-500 dark:bg-indigo-900 text-white">
            <tr>
              <th className="px-4 py-2 text-lg font-bold text-center dark:text-gray-100">Rank</th>
              <th className="px-4 py-2 text-lg font-bold text-center dark:text-gray-100">Username</th>
              <th className="px-4 py-2 text-lg font-bold text-center dark:text-gray-100">Score</th>
            </tr>
          </thead>
          <tbody>
            {skillTestResults.map((result, index) => (
              <tr key={result._id} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                <td className="px-4 py-2 text-lg text-center border border-gray-300 dark:border-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-lg text-center border border-gray-300 dark:border-gray-600">{result.username}</td>
                <td className="px-4 py-2 text-lg text-center border border-gray-300 dark:border-gray-600">{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;