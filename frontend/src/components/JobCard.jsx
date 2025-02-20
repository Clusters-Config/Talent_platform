import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className="p-6  border rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-all">

      <div><h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
        <Work /> {job.title} 
      </h2> </div>
      <div><p className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2">
        < LocationOn/> {job.company}
      </p></div>
      <div><p className="mt-2 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <FilterList /> {job.location} - {job.type}
      </p></div>
      <div><button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Apply</button></div>
    </div>
  )
}

export default JobCard

