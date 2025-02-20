import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import Loading from '../components/Loading'
import {motion} from 'framer-motion'

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
  <div className="flex items-center justify-center mb-10 min-h-screen">
    <Loading type="balls" color="green" />
  </div>
);
if (error) return <div>Error: {error}</div>;


 

  return (
    <div className="container mx-auto border p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Open Source Projects</h1>
      <ul className="space-y-4">
        {repos.map(repo => (
          <motion.li 
            key={repo.id} 
            className="p-4 border rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold">{repo.name}</h2>
            <p className="text-gray-700">{repo.description}</p>
            <p className="text-gray-500">Stars: {repo.stargazers_count}</p>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View Repository
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default OpenSource