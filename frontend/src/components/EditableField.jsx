// EditableField.js
import React from 'react';

const EditableField = ({
  label,
  value,
  isEditing,
  onChange,
  isTextArea = false,
}) => {
  if (isTextArea) {
    return (
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
        >
          {label}
        </label>
        <textarea
          className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 dark:focus:ring-indigo-500 focus:border-blue-500 dark:focus:border-indigo-500 text-gray-900 dark:text-gray-100"
          value={value}
          onChange={onChange}
          disabled={!isEditing}
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 dark:focus:ring-indigo-500 focus:border-blue-500 dark:focus:border-indigo-500 text-gray-900 "
        value={value}
        onChange={onChange}
        disabled={!isEditing}
      />
    </div>
  );
};

export default EditableField;