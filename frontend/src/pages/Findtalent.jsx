import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const candidates = [
  {
    id: 1,
    name: 'John Doe',
    headline: 'Software Engineer',
    skills: ['JavaScript', 'React', 'Node.js ', 'Testing', 'Agile'],
    location: 'Remote',
    experience: 'Senior',
    availability: 'Full-time',
    summary: 'Experienced full-stack developer with a passion for building scalable and maintainable web applications. Proven ability to deliver high-quality code and lead development teams. Expertise in JavaScript, React, Node.js, and agile methodologies.',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    headline: 'Marketing Specialist',
    skills: ['SEO', 'Social Media Marketing', 'Content Creation', 'Analytics', 'Email Marketing'],
    location: 'New York, NY',
    experience: 'Mid',
    availability: 'Part-time',
    summary: 'Results-driven marketing professional with a proven track record of success in developing and executing marketing campaigns. Expertise in SEO, social media marketing, content creation, and analytics.',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Peter Jones',
    headline: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics', 'Deep Learning'],
    location: 'San Francisco, CA',
    experience: 'Entry',
    availability: 'Contract',
    summary: 'Recent graduate with a strong background in data science and a passion for uncovering insights from data. Proficient in Python, machine learning algorithms, and statistical analysis.',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
];

async function fetchTalent () { 
  try{
  const response = await axios.get("http://localhost:3001/gettalent")
  const talentData = response.data.msg;
  console.log(talentData);
  return talentData;
  }
  catch(error){
    console.error(error);
  }

}

const FindTalent = () => {
  const [data,setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [availabilityFilters, setAvailabilityFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState(data);

  useEffect(() => {
    filterCandidates();
  }, [searchTerm, experienceFilters, availabilityFilters, selectedFilters]);

  useEffect(() => {
    filterCandidates();
    fetchTalent()
  }, []);

  const handleFilterSelect = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => {
      const existingFilterIndex = prevFilters.findIndex(f => f.type === filterType && f.value === filterValue);
      if (existingFilterIndex !== -1) {
        return prevFilters.filter((_, index) => index !== existingFilterIndex); 
      } else {
        return [...prevFilters, { type: filterType, value: filterValue }]; 
      }
    });
  };

  const handleRemoveFilter = (filterToRemove) => {
    setSelectedFilters(prevFilters => prevFilters.filter(f => f !== filterToRemove));
    if (filterToRemove.type === 'experience') {
      setExperienceFilters(prev => prev.filter(val => val !== filterToRemove.value));
    } else if (filterToRemove.type === 'availability') {
      setAvailabilityFilters(prev => prev.filter(val => val !== filterToRemove.value));
    }
    filterCandidates();
  };

  const filterCandidates = () => {
    let filtered = candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchTerm) ||
      candidate.headline.toLowerCase().includes(searchTerm) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm))
    );

    selectedFilters.forEach(filter => {
      if (filter.type === 'experience') {
        filtered = filtered.filter(candidate => experienceFilters.includes(candidate.experience));
      } else if (filter.type === 'availability') {
        filtered = filtered.filter(candidate => availabilityFilters.includes(candidate.availability));
      }
    });

    setFilteredCandidates(filtered);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    filterCandidates();
  };

  const handleExperienceChange = (value) => {
    if (experienceFilters.includes(value)) {
      setExperienceFilters(experienceFilters.filter(val => val !== value));
    } else {
      setExperienceFilters([...experienceFilters, value]);
    }
    handleFilterSelect('experience', value);
  };

  const handleAvailabilityChange = (value) => {
    if (availabilityFilters.includes(value)) {
      setAvailabilityFilters(availabilityFilters.filter(val => val !== value));
    } else {
      setAvailabilityFilters([...availabilityFilters, value]);
    }
    handleFilterSelect('availability', value);
  };


  return (
    <div className="container my-5 mx-auto px-4 lg:px-8 flex flex-col lg:flex-row">
      <aside className="w-max sm:w-[200px] lg:w-1/6 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0 lg:mr-6 fixed lg:h-[calc(100vh-5rem)] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>
        <div className="mb-4">
          <h3 className="text-md font-medium mb-2 text-gray-700">Experience</h3>
          <div>
            {['Entry', 'Mid', 'Senior'].map(exp => (
              <label key={exp} className="inline-flex items-center mr-4 mb-2">
                <input type="checkbox" value={exp} checked={experienceFilters.includes(exp)} onChange={() => handleExperienceChange(exp)} className="form-checkbox h-5 w-5 text-white-600 rounded-full" />
                <span className="ml-2 text-gray-700">{exp} Level</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-md font-medium mb-2 text-gray-700">Availability</h3>
          <div>
            {['Full-time', 'Part-time', 'Contract'].map(avail => (
              <label key={avail} className="inline-flex items-center mr-4 mb-2">
                <input type="checkbox" value={avail} checked={availabilityFilters.includes(avail)} onChange={() => handleAvailabilityChange(avail)} className="form-checkbox h-5 w-5 text-white-600 rounded-full" />
                <span className="ml-2 text-gray-700">{avail}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      <main className="w-full lg:w-fit ml-[25%] sm:mx-3">
        <div className="bg-white p-6 sm:ml-2 sm:p-1 rounded-lg shadow-md sm:w-[calc(80%-3rem)] fixed w-[calc(75%-8rem)] z-10">
          <div className=" flex sm:flex-col items-center">
            <div className="relative w-[75%] ">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, title or skills..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-2 " />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    filterCandidates();
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className='top-1/2'/>
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {selectedFilters.map(filter => (
                <div key={`${filter.type}-${filter.value}`} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                  {filter.value}
                  <button onClick={() => handleRemoveFilter(filter)} className="ml-1 text-gray-400 hover:text-gray-600 focus:outline-none">
                    <FaTimes className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[15%] pt-calc(6rem+1.5rem)] pr-20">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img src={candidate.imageUrl} alt={candidate.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{candidate.name}</h2>
                    <h3 className="text-gray-600 text-sm">{candidate.headline}</h3>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <span key={skill} className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex-grow mb-4">
                  <p className="text-gray-700 mb-1 text-sm">Experience: <span className="font-medium">{candidate.experience}</span></p>
                  <p className="text-gray-700 mb-1 text-sm">Availability: <span className="font-medium">{candidate.availability}</span></p>
                  <p className="text-gray-700 text-sm">{candidate.summary}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-200 mt-auto">
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
          {filteredCandidates.length === 0 && (
            <div className="text-center text-gray-500 col-span-full py-12">No candidates found.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FindTalent;