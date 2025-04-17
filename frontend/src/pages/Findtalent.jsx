import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateCard from '../components/CandidateCard';
import FilterList from '../components/FilterList';
import SearchBar from '../components/SearchBar';
import FilterAside from '../components/FilterAside';
import FilterListIcon from '@mui/icons-material/FilterList';
import Loading from '../components/Loading';

const Findtalent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [availabilityFilters, setAvailabilityFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalent = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getAllCandidates');
        setData(response.data);
        setFilteredCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTalent();
  }, []);

  useEffect(() => {
    const filterCandidates = () => {
      let filtered = data.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(searchTerm) ||
          candidate.headline.toLowerCase().includes(searchTerm) ||
          candidate.skills.some((skill) => skill.toLowerCase().includes(searchTerm))
      );

      if (experienceFilters.length) {
        filtered = filtered.filter((candidate) => experienceFilters.includes(candidate.experience));
      }

      if (availabilityFilters.length) {
        filtered = filtered.filter((candidate) => availabilityFilters.includes(candidate.availability));
      }

      setFilteredCandidates(filtered);
    };

    filterCandidates();
  }, [searchTerm, experienceFilters, availabilityFilters, data]);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  const handleFilterChange = (filterType, value) => {
    const updateFilters = (filters) =>
      filters.includes(value) ? filters.filter((item) => item !== value) : [...filters, value];

    if (filterType === 'experience') {
      setExperienceFilters((prev) => updateFilters(prev));
    } else if (filterType === 'availability') {
      setAvailabilityFilters((prev) => updateFilters(prev));
    }
  };

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());

  const handleRemoveAllFilters = () => {
    setExperienceFilters([]);
    setAvailabilityFilters([]);
    setSelectedFilters([]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
  <div className="h-full mx-auto px-4 lg:px-12 flex flex-col lg:flex-row dark:bg-gray-900 dark:text-gray-100">
    <aside className="w-max sm:w-[200px] sm:hidden lg:w-1/6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md lg:mb-0 lg:mr-6 fixed lg:mt-10 lg:h-[calc(100vh-8rem)] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Filters</h2>
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Experience</h3>
        {['Entry', 'Mid', 'Senior'].map((exp) => (
          <label key={exp} className="inline-flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              value={exp}
              checked={experienceFilters.includes(exp)}
              onChange={() => handleFilterChange('experience', exp)}
              className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded-full"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">{exp} Level</span>
          </label>
        ))}
      </div>
      <div>
        <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Availability</h3>
        {['Full-time', 'Part-time', 'Contract'].map((avail) => (
          <label key={avail} className="inline-flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              value={avail}
              checked={availabilityFilters.includes(avail)}
              onChange={() => handleFilterChange('availability', avail)}
              className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded-full"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">{avail}</span>
          </label>
        ))}
      </div>
    </aside>

    <main className="w-full lg:w-fit ml-[25%] sm:mx-3">
      <div className="bg-white dark:bg-gray-800 p-6 mt-5 sm:ml-2 sm:p-1 rounded-lg shadow-lg sm:w-[calc(90%-3rem)] fixed w-[calc(75%-8rem)] z-10">
        <div className="flex sm:flex-col justify-center place-items-center">
          <SearchBar
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            handleClearSearch={() => setSearchTerm('')}
          />
          <span className="hidden sm:block">
            <FilterListIcon className="text-gray-700 dark:text-gray-300" onClick={toggleFilters} />
          </span>
          <FilterList
            filters={selectedFilters}
            handleRemoveFilter={(filter) => handleFilterChange(filter.type, filter.value)}
          />
        </div>

        <FilterAside
          showFilters={showFilters}
          toggleFilters={toggleFilters}
          handleRemoveAllFilters={handleRemoveAllFilters}
          experienceFilters={experienceFilters}
          availabilityFilters={availabilityFilters}
          handleExperienceChange={(value) => handleFilterChange('experience', value)}
          handleAvailabilityChange={(value) => handleFilterChange('availability', value)}
          className={`fixed lg:h-[calc(100vh-5rem)] overflow-y-auto ${showFilters ? 'block' : 'hidden'}`}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[12%] sm:mt-[35%] sm:pr-4 lg:pr-20">
        {filteredCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
        {filteredCandidates.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 col-span-full py-12">
            No candidates found.
          </div>
        )}
      </div>
    </main>
  </div>
);
}
export default Findtalent;
