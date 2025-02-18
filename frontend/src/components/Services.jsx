import React from "react";
import { FaBriefcase, FaUsers, FaCode, FaRobot, FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";

const services = [
  {
    title: "Equal Opportunity Hiring",
    description: "We promote fair hiring practices, ensuring unbiased and inclusive job opportunities for all.",
    icon: <FaUsers />,
  },
  {
    title: "Open Source Portfolio",
    description: "Showcase your open-source contributions and technical projects to attract top recruiters.",
    icon: <FaCode />,
  },
  {
    title: "AI Job Matching",
    description: "Our AI-powered engine suggests the best job opportunities based on your skills & experience.",
    icon: <FaRobot />,
  },
  {
    title: "Skill-Based Job Search",
    description: "Find jobs that match your skillset with precision for better career growth.",
    icon: <FaBriefcase />,
  },
  {
    title: "Career Growth Analytics",
    description: "Track your career progress and analyze the best industries for your expertise.",
    icon: <FaChartLine />,
  },
  {
    title: "Networking & Mentorship",
    description: "Connect with industry leaders and mentors to accelerate your professional journey.",
    icon: <FaHandshake />,
  },
];

const ServicePage = () => {
  return (
    <div className="py-20 px-6 sm:px-10 lg:px-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 inline-block text-transparent bg-clip-text">
          Our Core Services
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          We bridge the gap between talent and opportunity with AI-powered solutions.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-transform duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Icon with Glow Effect */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-indigo-600 dark:text-indigo-400 text-5xl bg-indigo-100 dark:bg-indigo-800/40 rounded-full shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:bg-indigo-500 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-6">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 to-blue-400 dark:from-indigo-700 dark:to-blue-500 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
