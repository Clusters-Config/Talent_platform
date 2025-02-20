import { useState, useEffect } from "react";
import { Search, Business, LocationOn, Work, FilterList } from "@mui/icons-material";
import JobImg from "../assets/user.jpg"

const categories = [
  "Management", "Development", "Digital", "Design", "Finance", "Engineering", "Marketing"
];

const staticJobs = [
  { title: "Project Manager", company: "Gradient", location: "Las Vegas", type: "Full Time", category: "Finance",content:"We are looking for a project manager to be responsible for handling our company's ongoing projects. You will be working closely with your team members to ensure that all project requirements, deadlines, and schedules are on track. Responsibilities include submitting project deliverables, preparing status reports, and establishing effective project communication plans as well as the proper execution of said plans." },
  { title: "Operations Manager", company: "Pipe", location: "London", type: "Remote", category: "Management",content:"We are looking for a project manager to be responsible for handling our company's ongoing projects. You will be working closely with your team members to ensure that all project requirements, deadlines, and schedules are on track. Responsibilities include submitting project deliverables, preparing status reports, and establishing effective project communication plans as well as the proper execution of said plans." },
  { title: "Human Resources Manager", company: "Lineo", location: "California", type: "Remote", category: "Management",content:"We are looking for a project manager to be responsible for handling our company's ongoing projects. You will be working closely with your team members to ensure that all project requirements, deadlines, and schedules are on track. Responsibilities include submitting project deliverables, preparing status reports, and establishing effective project communication plans as well as the proper execution of said plans." }
];

function JobCard({ job }) {
  return (
    <div className="p-6 w-[370px] grid grid-flow-row gap-3 border rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
        <Work /> {job.title}
        <img src={JobImg} alt="" className="w-12 h-12 ml-10" />
      </h2>
      <p className="text-sm text-gray-500  dark:text-gray-300 flex items-center gap-2">
        <Business /> {job.company}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center lg:line-clamp-3  gap-2">
         {job.content}
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <LocationOn /> {job.location} - {job.type}
      </p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Apply</button>
    </div>
  );
}

export default function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState("Management");
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data.length ? data : staticJobs))
      .catch(() => setJobs(staticJobs));
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.category === selectedCategory &&
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className=" p-10 ">
        <div className="">
        <h1 className="text-4xl font-bold">Extensive Job Listings</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">A seamless, efficient, and user-friendly platform for both job seekers and employers.</p>
        
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <div className="relative w-full ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="p-3 pl-10 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* <button className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
            <FilterList /> Ask AI
          </button> */}
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${selectedCategory === category ? "bg-black text-white" : "bg-white text-black border border-gray-400"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        </div>

        <div className="grid md:grid-cols-3 gap-6                                                                                                                           ">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
          ) : (
            <p className="text-center col-span-3 text-gray-500 dark:text-gray-300">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
