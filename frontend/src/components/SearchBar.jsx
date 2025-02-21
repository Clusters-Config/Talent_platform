import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Close } from '@mui/icons-material';

const SearchBar = ({ searchTerm, handleSearch, handleClearSearch }) => {
  return (
    <div className="relative w-[80%] sm:w-[95%] sm:flex sm:items-center sm:gap-3">
      <div className="relative w-full">
        {/* Search Icon */}
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name, title or skills..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200"
        />
        
        {/* Clear Search Button */}
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <Close className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;