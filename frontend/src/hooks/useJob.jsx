import axios from 'axios';
import { useState ,useEffect } from 'react';


const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3001/getjob',{
        headers:{ 
          'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
      });
      const jobData = result.data.msg; 
      return jobData;
    } catch (error) {
      console.error(error);
      return []; 
    }
  };

const useJob = () => {
    const [jobData, setData] = useState([]);
    console.log(jobData);
    useEffect(() => { 
      fetchData().then((jobData) => {
        setData(jobData);
      });
    }, []);

    return jobData;
}

export default useJob;