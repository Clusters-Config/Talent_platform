import React from 'react';
import { FaTimes } from 'react-icons/fa';

const FilterList = ({ filters, handleRemoveFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {filters.map((filter) => (
        <div
          key={`${filter.type}-${filter.value}`}
          className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium flex items-center dark:bg-blue-900 dark:text-blue-200"
        >
          {filter.value}
          <button
            onClick={() => handleRemoveFilter(filter)}
            className="ml-1 text-gray-400 hover:text-gray-600 focus:outline-none dark:text-gray-300 dark:hover:text-gray-100"
          >
            <FaTimes className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
