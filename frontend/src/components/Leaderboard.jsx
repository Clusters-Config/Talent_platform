import React from 'react';

const Leaderboard = ({ skillTestResults }) => {
  return (
    <div className="font-sans mt-5">
      <h2 className="text-center text-xl font-semibold mb-3">Leaderboard</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border text-left">Rank</th>
            <th className="p-2 border text-left">Username</th>
            <th className="p-2 border text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {skillTestResults.map((result, index) => (
            <tr key={result._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{result.username}</td>
              <td className="p-2 border">{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
