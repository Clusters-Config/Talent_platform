import React, { useState, useEffect } from 'react';
import useJob from '../hooks/useJob';
import Loading from '../components/Loading';
import Post from '../components/Post';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const data = useJob();

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {data.map((post, index) => (
        <Post key={index} name={post.name} title={post.title} position={post.position} />
      ))}
    </div>
  );
};

export default Main;
