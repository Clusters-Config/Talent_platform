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
    const [jobdata, setData] = useState([]);
    console.log(jobdata);
    useEffect(() => { 
      fetchData().then((data) => {
        setData(data);
      });
    }, []);

    return jobdata;
}

export default useJob;