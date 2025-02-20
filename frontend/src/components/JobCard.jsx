import React from 'react'
import { Search, Business, LocationOn, Work, FilterList } from "@mui/icons-material";
import JobImg from "../assets/user.jpg"
import { useNavigate } from "react-router-dom";

const  JobCard= ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6 w-[370px] grid grid-flow-row gap-3 border rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
        <Work /> {job.title}
        <img src={JobImg} alt="" className="w-12 h-12 ml-10" />
      </h2>
      <p className="text-sm text-gray-500  dark:text-gray-300 flex items-center gap-2">
        <Business /> {job.name}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center lg:line-clamp-3  gap-2">
         {job.content}
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <LocationOn /> {job.location}
      </p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={()=>navigate('/skilltest')}>Apply</button>
    </div>
  );
}
export default JobCard

