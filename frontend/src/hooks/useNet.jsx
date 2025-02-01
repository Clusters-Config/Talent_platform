import axios from 'axios';
import { useState ,useEffect } from 'react';

const fetchNetwork = async () => { 
    try { 
        const result =await axios.get('http://localhost:3001/getnetwork');
        const networkData = result.data.msg; 
        return networkData;

    }
    catch (error) {
        console.error(error);
        return [];
    }
}




const useNet = () =>{ 
    const [networkdata, setData] = useState([]);
    console.log(networkdata);
    useEffect(() => { 
        fetchNetwork().then((data) => {
            setData(data);
        });
    }, []);

    return networkdata;
}

export default useNet;