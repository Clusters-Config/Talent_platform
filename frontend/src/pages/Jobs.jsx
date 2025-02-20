import React from 'react';
import { useState } from 'react';
import JobsModal from '../components/JobsModal';
import Jobskeleton from "../components/Jobskeleton"
import useJob from '../hooks/useJob';

const Jobs = () => {
  const data = useJob();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setModalVisible(true);
  };

  return (
    <div>
      <div>
        {data.map((post,index) => (
          <div className='flex gap-1 flex-wrap sm:mx-2 sm:p-2'> 
          <button className='mt-2 mb-2 '  onClick={() => handleJobClick(post)}>
            <Jobskeleton key={index}title={post.title} content={post.content} position={post.position} organisation={post.name} />
          </button>
          <button className='mt-2 mb-2 '  onClick={() => handleJobClick(post)}>
            <Jobskeleton key={index} title={post.title} content={post.content} position={post.position} organisation={post.name} />
          </button>
          </div>
        ))}
      </div>
      {modalVisible && (
        <JobsModal
          modalVisible={modalVisible}
          jobDetails={selectedJob}
          setModalVisible={setModalVisible}
        />
      )}
    </div>
  );
};

export default Jobs;

