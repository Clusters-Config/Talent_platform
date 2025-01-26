import { useState,  } from 'react';
import Jobskeleton from '../components/Jobskeleton';
import useJob from '../hooks/useJob';
import SideBar from '../components/Sidebar';




const Jobs = () => {
  const data  = useJob();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

 
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
        {data.map((post) => (
          <button className='mt-2 mb-2' key={post.id} onClick={() => handleJobClick(post)}>
            <Jobskeleton title={post.title} content={post.content} position={post.position} organization={post.name} />
          </button>
        ))}
      </div>
    </>
  );
}

export default Jobs;
