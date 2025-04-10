import { useState, useEffect } from "react";
import { Search } from "@mui/icons-material";
import JobCard from "../components/JobCard";
import axios from "axios";
import FilterAside from "../components/FilterAside";
import Loading from '../components/Loading'


async function fetchData() {
  try {
    const result = await axios.get('http://localhost:3001/getjob', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const jobData = result.data.msg;
    console.log(jobData);
    return jobData;
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

export default function JobListings() {

  const [selectedPositions, setSelectedPositions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [availabilityFilters, setAvailabilityFilters] = useState([]);
  const [availablePositions, setAvailablePositions] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      fetchData().then((data) => {
        setJobs(data);
        const positions = [...new Set(data.map((job) => job.position))];
        setAvailablePositions(positions);
      });
    }, 1000);
  }, []);

  const handleExperienceChange = (exp) => {
    setExperienceFilters((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
    );
  };

  const handleAvailabilityChange = (avail) => {
    setAvailabilityFilters((prev) =>
      prev.includes(avail) ? prev.filter((a) => a !== avail) : [...prev, avail]
    );
  };

  const handlePositionChange = (position) => {
    setSelectedPositions((prev) =>
      prev.includes(position) ? prev.filter((p) => p !== position) : [...prev, position]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const positionMatch = selectedPositions.length === 0 || selectedPositions.includes(job.position);
    const searchTermMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const experienceMatch = experienceFilters.length === 0 || experienceFilters.includes(job.experience);
    const availabilityMatch = availabilityFilters.length === 0 || availabilityFilters.includes(job.type);

    return positionMatch && searchTermMatch && experienceMatch && availabilityMatch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className=" p-10 ">
        <div className="">
          <h1 className="text-4xl font-bold">Extensive Job Listings</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">A seamless, efficient, and user-friendly platform for both job seekers and employers.</p>

          <div className="mb-6 flex flex-wrap gap-4 items-center">
            <div className="relative w-full ">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="p-3 pl-10 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {availablePositions.map((position) => (
              <button
                key={position}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${selectedPositions.includes(position) ? "bg-black text-white" : "bg-white text-black border border-gray-400"}`}
                onClick={() => handlePositionChange(position)}
              >
                {position}
              </button>
            ))}
          </div>
          <div className="flex">
            <FilterAside
              experienceFilters={experienceFilters}
              availabilityFilters={availabilityFilters}
              handleExperienceChange={handleExperienceChange}
              handleAvailabilityChange={handleAvailabilityChange}
            />
            <div className="grid md:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
              ) : (
                <p className="text-center col-span-3 text-gray-500 dark:text-gray-300">No jobs found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
