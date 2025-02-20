import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Profile = () => {
async function profile(name, id) {
    try {
        const response = await axios.get(`http://localhost:3001/profile/${id}/${name}`);
        console.log({response});
        return response;
    } catch (error) {
        console.error(error);
    }
    }

  return (
    <div >
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Profile</h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">John Doe</h2>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">About Me</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Skills</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Experience</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                <li>Software Engineer at ABC Corp (2020 - Present)</li>
                <li>Frontend Developer at XYZ Ltd (2018 - 2020)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile