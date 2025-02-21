import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const FilterAside = ({
  showFilters,
  toggleFilters,
  handleRemoveAllFilters,
  experienceFilters,
  availabilityFilters,
  handleExperienceChange,
  handleAvailabilityChange,
}) => {
  return (
    <aside
      className={`w-fit lg:w-1/6 lg:hidden sm:${showFilters ? 'block' : 'hidden'} bg-white dark:bg-gray-800 p-6 rounded-lg mb-6 lg:mb-0 lg:mr-6 lg:h-[calc(100vh-5rem)] overflow-y-auto`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Filters</h2>
        <div
          className="hover:bg-blue-200 dark:hover:bg-blue-700 rounded-3xl p-2 cursor-pointer flex items-center gap-2"
          onClick={handleRemoveAllFilters}
        >
          <span className="text-gray-700 dark:text-gray-300">Clear Filters</span>
          <CloseIcon className="text-gray-700 dark:text-gray-300" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Experience</h3>
        <div>
          {['Entry', 'Mid', 'Senior'].map((exp) => (
            <label key={exp} className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                value={exp}
                checked={experienceFilters.includes(exp)}
                onChange={() => handleExperienceChange(exp)}
                className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded-full"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">{exp} Level</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Availability</h3>
        <div>
          {['Full-time', 'Part-time', 'Contract'].map((avail) => (
            <label key={avail} className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                value={avail}
                checked={availabilityFilters.includes(avail)}
                onChange={() => handleAvailabilityChange(avail)}
                className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded-full"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">{avail}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;