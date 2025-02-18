import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const FilterAside = ({ showFilters, toggleFilters, handleRemoveAllFilters, experienceFilters, availabilityFilters, handleExperienceChange, handleAvailabilityChange }) => {
  return (
    <aside className={`w-fit lg:w-1/6 lg:hidden sm:${showFilters ? 'block' : 'hidden'} bg-white p-6 rounded-lg mb-6 lg:mb-0 lg:mr-6 lg:h-[calc(100vh-5rem)] overflow-y-auto`}>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold  text-gray-800">Filters</h2>
        <div className="hover:bg-blue-200 rounded-3xl" onClick={handleRemoveAllFilters}>
          Clear Filters
          <CloseIcon />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2 text-gray-700">Experience</h3>
        <div>
          {['Entry', 'Mid', 'Senior'].map((exp) => (
            <label key={exp} className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                value={exp}
                checked={experienceFilters.includes(exp)}
                onChange={() => handleExperienceChange(exp)}
                className="form-checkbox h-5 w-5 text-white-600 rounded-full"
              />
              <span className="ml-2 text-gray-700">{exp} Level</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-md font-medium mb-2 text-gray-700">Availability</h3>
        <div>
          {['Full-time', 'Part-time', 'Contract'].map((avail) => (
            <label key={avail} className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                value={avail}
                checked={availabilityFilters.includes(avail)}
                onChange={() => handleAvailabilityChange(avail)}
                className="form-checkbox h-5 w-5 text-white-600 rounded-full"
              />
              <span className="ml-2 text-gray-700">{avail}</span>
            </label>
          ))}
        </div>
      </div>
     
    </aside>
  );
};

export default FilterAside;