import { useState, useEffect } from 'react';
import Jobskeleton from '../components/Jobskeleton';
import SideBar from '../components/Sidebar';
import axios from 'axios';

const fetchData = async () => {
  try {
    const result = await axios.get('http://localhost:3001/getjob');
    const jobData = result.data.msg; 
    return jobData;
  } catch (error) {
    console.error(error);
    return []; 
  }
};

const Jobs = () => {
  const [jobdata, setData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => { 
    fetchData().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const toggleSidebar = (open) => () => {
    setSidebarOpen(open);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setSidebarOpen(true);
  };

  return (
    <>
      <SideBar open={sidebarOpen} toggleDrawer={toggleSidebar} jobDetails={selectedJob} />
      <div>
        {jobdata.map((post) => (
          <button className='mt-2 mb-2' key={post.id} onClick={() => handleJobClick(post)}>
            <Jobskeleton title={post.title} content={post.content} position={post.position} organization={post.name} />
          </button>
        ))}
      </div>
    </>
  );
}

export default Jobs;
