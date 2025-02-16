import React from "react";
import { FaBriefcase, FaUsers, FaCode, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Equal Opportunity Hiring",
    description: "Our AI-driven platform ensures fair hiring practices, giving everyone an equal chance.",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
  },
  {
    title: "Open Source Showcase",
    description: "Showcase your open-source contributions directly on your profile to stand out.",
    icon: <FaCode className="text-blue-500 text-4xl" />,
  },
  {
    title: "AI Job Suggestions",
    description: "Get personalized job recommendations based on your skills, projects, and experience.",
    icon: <FaRobot className="text-blue-500 text-4xl" />,
  },
  {
    title: "Skill-Based Matching",
    description: "Find jobs that match your skillset and expertise for better career opportunities.",
    icon: <FaBriefcase className="text-blue-500 text-4xl" />,
  },
];

const ServicePage = () => {
  return (
    <div className="py-14 px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          Empowering job seekers with equal opportunities and AI-driven career guidance.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-700 transform hover:-translate-y-2"
            >
              <div className="mb-4">{React.cloneElement(service.icon, { className: "text-blue-500 text-4xl sm:text-3xl lg:text-4xl" })}</div>
              <h3 className="text-xl font-semibold text-gray-800 sm:text-lg lg:text-xl">{service.title}</h3>
              <p className="text-gray-600 mt-2 sm:text-sm lg:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
