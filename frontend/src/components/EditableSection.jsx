// EditableSection.js
import React from 'react';
import EditableField from './EditableField';

const EditableSection = ({
  title,
  isEditing,
  onEdit,
  onSave,
  section,
  basicInfo,
  description,
  contactInfo,
  children,
}) => {
  return (
    <div
      className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8"
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
        >
          {title}
        </h2>
        {isEditing ? (
          <button
            className="bg-blue-500 dark:bg-indigo-500 hover:bg-blue-700 dark:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={onSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 dark:bg-indigo-500 hover:bg-blue-700 dark:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={onEdit}
          >
            Edit
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default EditableSection;