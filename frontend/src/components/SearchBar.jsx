import React from "react";
import { FaSearch } from "react-icons/fa";
import { Close } from "@mui/icons-material";

const SearchBar = ({ searchTerm, handleSearch, handleClearSearch }) => {
  return (
    <div className="relative w-[80%] sm:w-[95%] sm:flex sm:items-center sm:gap-3">
      <div className="relative w-full">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search by name, title or skills..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500"
        />
      </div>

      {searchTerm && (
        <button
          onClick={handleClearSearch}
          className="absolute right-3 sm:right-11 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          <Close />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
