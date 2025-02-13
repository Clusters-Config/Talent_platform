import React, { useState, useEffect } from 'react';
import axios from 'axios';

const candidates = [
  {
    id: 1,
    name: 'John Doe',
    headline: 'Software Engineer',
    skills: ['JavaScript', 'React', 'Node.js', 'Testing', 'Agile'],
    location: 'Remote',
    experience: 'Senior',
    availability: 'Full-time',
    summary: 'Experienced full-stack developer with a passion for building scalable and maintainable web applications. Proven ability to deliver high-quality code and lead development teams. Expertise in JavaScript, React, Node.js, and agile methodologies.',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    headline: 'Marketing Specialist',
    skills: ['SEO', 'Social Media Marketing', 'Content Creation', 'Analytics', 'Email Marketing'],
    location: 'New York, NY',
    experience: 'Mid',
    availability: 'Part-time',
    summary: 'Results-driven marketing professional with a proven track record of success in developing and executing marketing campaigns. Expertise in SEO, social media marketing, content creation, and analytics.',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Peter Jones',
    headline: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics', 'Deep Learning'],
    location: 'San Francisco, CA',
    experience: 'Entry',
    availability: 'Contract',
    summary: 'Recent graduate with a strong background in data science and a passion for uncovering insights from data. Proficient in Python, machine learning algorithms, and statistical analysis.',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
];

async function fetchTalent() { 
  try {
    const response = await axios.get("http://localhost:3001/gettalent");
    const talentData = response.data.msg;
    console.log(talentData);
    return talentData;
  } catch (error) {
    console.error(error);
  }
}

const FindTalent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchTalent();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCandidates(
      candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(term) ||
        candidate.headline.toLowerCase().includes(term) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(term))
      )
    );
  };

  return (
    <div className="container my-5 mx-auto px-4 flex flex-col">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="relative w-full">
          <i className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search by name, title or skills..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-2"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setFilteredCandidates(candidates);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <i className="fa fa-times"></i>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src={candidate.imageUrl} alt={candidate.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{candidate.name}</h2>
                  <h3 className="text-gray-600">{candidate.headline}</h3>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <span key={skill} className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="text-gray-700">
                <p className="mb-1">Experience: <span className="font-medium">{candidate.experience}</span></p>
                <p className="mb-1">Availability: <span className="font-medium">{candidate.availability}</span></p>
                <p>{candidate.summary}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                View Profile
              </button>
            </div>
          </div>
        ))}
        {filteredCandidates.length === 0 && (
          <div className="text-center text-gray-500 col-span-full py-12">No candidates found.</div>
        )}
      </div>
    </div>
  );
};

export default FindTalent;