import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from '../components/Loading'
import { motion } from 'framer-motion'

const OpenSource = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/search/repositories?q=language:C++&sort=stars');
        setRepos(response.data.items);
        console.log(response)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      <Loading type="balls" color="green" />
    </div>
  );

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-indigo-600 mt-16">Top C++ Open Source Projects</h1>
      <ul className="space-y-6">
        {repos.map(repo => (
          <motion.li
            key={repo.id}
            className="p-6 border mx-[20rem] rounded-lg shadow-lg bg-white hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">{repo.name}</h2>
            <p className="text-gray-800 dark:text-gray-300 mt-2 mb-4">{repo.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400">⭐ {repo.stargazers_count}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-300"
              >
                View Repository
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default OpenSource;
