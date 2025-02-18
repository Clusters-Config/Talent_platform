import React from "react";

const resources = [
  {
    title: "Intuitive Search and Filtering",
    description: "Find jobs effortlessly with smart filters and AI-powered recommendations.",
    icon: "🔍",
  },
  {
    title: "Personalized Job Offers",
    description: "Receive tailored job opportunities based on your skills and preferences.",
    icon: "📩",
  },
  {
    title: "Comprehensive Company Profiles",
    description: "Explore in-depth company insights before making a career move.",
    icon: "🏢",
  },
  {
    title: "Easy Application Process",
    description: "Apply to jobs seamlessly with just one click.",
    icon: "📝",
  },
  {
    title: "Networking Opportunities",
    description: "Connect with professionals and expand your career network.",
    icon: "🤝",
  },
  {
    title: "Job & Interview Information",
    description: "Get expert guidance and insights to ace your interviews.",
    icon: "📚",
  },
];

const Resources = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 sm:px-10 lg:px-24 text-gray-900 dark:text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-indigo-400 dark:to-blue-300 inline-block text-transparent bg-clip-text">
            Explore Our Job Resources
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Get access to powerful tools and insights to navigate your career path effectively.
          </p>
        </div>

        {/* Highlighted Resource Card */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-200 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Unlock Your Career Potential</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Our users are at the heart of everything we do. Access exclusive resources and expert insights to advance your career.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 rounded-lg text-white font-semibold shadow-md">
              Learn More
            </button>
          </div>

          {/* Resource Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-start transition-transform duration-500 hover:scale-105 hover:shadow-lg group"
              >
                {/* Icon with Glow */}
                <div className="text-4xl bg-blue-100 dark:bg-indigo-700/40 p-3 rounded-xl shadow-md transition-all duration-500 group-hover:bg-indigo-500 group-hover:text-white">
                  {resource.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold">{resource.title}</h3>

                {/* Description */}
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {resource.description}
                </p>

                {/* Subtle Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 to-blue-400 dark:from-indigo-700 dark:to-blue-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
