import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

const OpenSource = () => {
 const [repos, setRepos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchRepos = async () => {
      try {
          const response = await axios.get('https://api.github.com/search/repositories?q=language:Java&sort=stars');
          setRepos(response.data.items);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
  };

  fetchRepos();
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;


  return (
   <>
        <div>
            <h1>Open Source Projects</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <p>Stars: {repo.stargazers_count}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
                    </li>
                ))}
            </ul>
        </div>
   </>
  )
}

export default OpenSource