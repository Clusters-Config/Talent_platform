import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateCard from '../components/CandidateCard';
import FilterList from '../components/FilterList';
import SearchBar from '../components/SearchBar';
import FilterAside from '../components/FilterAside';
import FilterListIcon from '@mui/icons-material/FilterList';
import Loading from '../components/Loading';

const candidates =[
  {
    "id": 1,
    "name": "John Doe",
    "headline": "Software Engineer",
    "skills": ["JavaScript", "React", "Node.js", "Testing", "Agile"],
    "location": "Remote",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Experienced full-stack developer with a passion for building scalable and maintainable web applications. Proven ability to deliver high-quality code and lead development teams. Expertise in JavaScript, React, Node.js, and agile methodologies.",
    "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "headline": "Marketing Specialist",
    "skills": ["SEO", "Social Media Marketing", "Content Creation", "Analytics", "Email Marketing"],
    "location": "New York, NY",
    "experience": "Mid",
    "availability": "Part-time",
    "summary": "Results-driven marketing professional with a proven track record of success in developing and executing marketing campaigns. Expertise in SEO, social media marketing, content creation, and analytics.",
    "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "name": "Peter Jones",
    "headline": "Data Scientist",
    "skills": ["Python", "Machine Learning", "Data Analysis", "Statistics", "Deep Learning"],
    "location": "San Francisco, CA",
    "experience": "Entry",
    "availability": "Contract",
    "summary": "Recent graduate with a strong background in data science and a passion for uncovering insights from data. Proficient in Python, machine learning algorithms, and statistical analysis.",
    "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "name": "Emily Chen",
    "headline": "UX Designer",
    "skills": ["User  Experience", "User  Interface", "Design Thinking", "Prototyping", "Usability Testing"],
    "location": "Los Angeles, CA",
    "experience": "Mid",
    "availability": "Full-time",
    "summary": "User -centered designer with a passion for creating intuitive and engaging user experiences. Proficient in design thinking, prototyping, and usability testing.",
    "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "name": "Michael Brown",
    "headline": "DevOps Engineer",
    "skills": ["AWS", "Docker", "Kubernetes", "CI/CD", "Automation"],
    "location": "Seattle, WA",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "DevOps engineer with expertise in cloud infrastructure, containerization, and automation. Experience working with AWS, Docker, and Kubernetes.",
    "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "id": 6,
    "name": "Sarah Lee",
    "headline": "Cybersecurity Specialist",
    "skills": ["Security", "Compliance", "Risk Management", "Penetration Testing", "Vulnerability Assessment"],
    "location": "Washington, D.C.",
    "experience": "Mid",
    "availability": "Part-time",
    "summary": "Cybersecurity specialist with a strong background in security, compliance, and risk management. Experience working with penetration testing and vulnerability assessment.",
    "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "id": 7,
    "name": "David Kim",
    "headline": "Full Stack Developer",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "location": "Chicago, IL",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Full-stack developer with expertise in JavaScript, React, and Node.js. Experience working with MongoDB and Express.",
    "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    "id": 8,
    "name": "Jessica Green",
    "headline": "Data Analyst",
    "skills": ["Data Analysis", "Data Visualization", "SQL", "Excel", "Statistics"],
    "location": "Boston, MA",
    "experience": "Mid",
    "availability": "Part-time",
    "summary": "Data analyst with a strong background in data analysis and visualization. Proficient in SQL, Excel, and statistical analysis.",
    "imageUrl": "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    "id": 9,
    "name": "Tom Harris",
    "headline": "Cloud Engineer",
    "skills": ["AWS", "Azure", "Cloud Architecture", "DevOps", "Networking"],
    "location": "Austin, TX",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Cloud engineer with expertise in AWS and Azure cloud services. Experience in cloud architecture, networking, and DevOps practices.",
    "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "id": 10,
    "name": "Emily Taylor",
    "headline": "Artificial Intelligence Engineer",
    "skills": ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Data Science"],
    "location": "San Diego, CA",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "AI engineer with a strong background in machine learning and deep learning. Proficient in Python and TensorFlow, with experience in developing AI models.",
    "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    "id": 11,
    "name": "Kevin White",
    "headline": "Network Administrator",
    "skills": ["Networking", "Firewall", "VPN", "Troubleshooting", "Security"],
    "location": "Phoenix, AZ",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Network administrator with expertise in networking, firewall management, and security. Experience in troubleshooting and maintaining network systems.",
    "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "id": 12,
    "name": "Sophia Patel",
    "headline": "Database Administrator",
    "skills": ["SQL", "Database Design", "Performance Tuning", "Backup and Recovery", "Data Security"],
    "location": "Miami, FL",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Database administrator with expertise in SQL and database design. Experience in performance tuning, backup and recovery, and data security.",
    "imageUrl": "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    "id": 13,
    "name": "Michael Johnson",
    "headline": "IT Project Manager",
    "skills": ["Project Management", "Agile", "Scrum", "Stakeholder Management", "Risk Management"],
    "location": "Atlanta, GA",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "IT project manager with expertise in project management methodologies, including Agile and Scrum. Experience in stakeholder management and risk assessment.",
    "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "id": 14,
    "name": "Laura Adams",
    "headline": "Web Developer",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    "location": "Dallas, TX",
    "experience": "Mid",
    "availability": "Full-time",
    "summary": "Web developer with expertise in front-end technologies including HTML, CSS, and JavaScript. Experience in building responsive web applications using React and Node.js.",
    "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "id": 15,
    "name": "Daniel Wilson",
    "headline": "Mobile App Developer",
    "skills": ["iOS", "Android", "React Native", "Swift", "Java"],
    "location": "Seattle, WA",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Mobile app developer with expertise in iOS and Android development. Proficient in React Native, Swift, and Java, with experience in building cross-platform applications.",
    "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    "id": 16,
    "name": "Sarah Lee",
    "headline": "Quality Assurance Engineer",
    "skills": ["Testing", "Automation", "Selenium", "Bug Tracking", "Agile"],
    "location": "San Francisco, CA",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Quality assurance engineer with expertise in testing methodologies and automation tools. Experience in using Selenium for automated testing and bug tracking.",
    "imageUrl": "https://randomuser.me/api/ portraits/women/16.jpg"
  },
  {
    "id": 17,
    "name": "Kevin Brown",
    "headline": "Technical Writer",
    "skills": ["Technical Writing", "Documentation", "Editing", "Content Management", "Research"],
    "location": "Boston, MA",
    "experience": "Mid",
    "availability": "Part-time",
    "summary": "Technical writer with experience in creating and maintaining technical documentation. Strong editing skills and ability to simplify complex information.",
    "imageUrl": "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    "id": 18,
    "name": "Jessica Green",
    "headline": "Systems Analyst",
    "skills": ["Systems Analysis", "Requirements Gathering", "Process Improvement", "Documentation", "Stakeholder Engagement"],
    "location": "Los Angeles, CA",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "Systems analyst with expertise in analyzing and improving IT systems. Experience in requirements gathering and stakeholder engagement.",
    "imageUrl": "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    "id": 19,
    "name": "Daniel Wilson",
    "headline": "Game Developer",
    "skills": ["Unity", "C#", "Game Design", "3D Modeling", "Animation"],
    "location": "Austin, TX",
    "experience": "Mid",
    "availability": "Full-time",
    "summary": "Game developer with experience in Unity and C#. Proficient in game design, 3D modeling, and animation.",
    "imageUrl": "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    "id": 20,
    "name": "Laura Adams",
    "headline": "SEO Specialist",
    "skills": ["SEO", "Content Strategy", "Keyword Research", "Analytics", "Link Building"],
    "location": "Miami, FL",
    "experience": "Senior",
    "availability": "Full-time",
    "summary": "SEO specialist with expertise in content strategy and keyword research. Experience in analytics and link building to improve website visibility.",
    "imageUrl": "https://randomuser.me/api/portraits/women/20.jpg"
  }
]

async function fetchTalent () { 
  try{
  const response = await axios.get("http://localhost:3001/gettalent")
  const talentData = response.data.msg;
  console.log(talentData);
  return talentData;
  }
  catch(error){
    console.error(error);
  }

}

const Findtalent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [availabilityFilters, setAvailabilityFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState(data);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    filterCandidates();
  }, [searchTerm, experienceFilters, availabilityFilters, selectedFilters]);

  useEffect(() => {
    filterCandidates();
    fetchTalent();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const toggleFilters = () => {
    setShowFilters(showFilters);
    console.log("showFilters", showFilters);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.filter-icon')) {
      setShowFilters(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleFilterSelect = (filterType, filterValue) => {
    setSelectedFilters((prevFilters) => {
      const existingFilterIndex = prevFilters.findIndex(
        (f) => f.type === filterType && f.value === filterValue
      );
      if (existingFilterIndex !== -1) {
        return prevFilters.filter((_, index) => index !== existingFilterIndex);
      } else {
        return [...prevFilters, { type: filterType, value: filterValue }];
      }
    });
  };

  const handleRemoveFilter = (filterToRemove) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filterToRemove)
    );
    if (filterToRemove.type === 'experience') {
      setExperienceFilters((prev) =>
        prev.filter((val) => val !== filterToRemove.value)
      );
    } else if (filterToRemove.type === 'availability') {
      setAvailabilityFilters((prev) =>
        prev.filter((val) => val !== filterToRemove.value)
      );
    }
    filterCandidates();
  };

  const handleRemoveAllFilters = () => {
    setSelectedFilters([]);
    setExperienceFilters([]);
    setAvailabilityFilters([]);
    filterCandidates();
  };

  const filterCandidates = () => {
    let filtered = candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(searchTerm) ||
        candidate.headline.toLowerCase().includes(searchTerm) ||
        candidate.skills.some((skill) => skill.toLowerCase().includes(searchTerm))
    );

    selectedFilters.forEach((filter) => {
      if (filter.type === 'experience') {
        filtered = filtered.filter(
          (candidate) => experienceFilters.includes(candidate.experience)
        );
      } else if (filter.type === 'availability') {
        filtered = filtered.filter(
          (candidate) => availabilityFilters.includes(candidate.availability)
        );
      }
    });

    setFilteredCandidates(filtered);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    filterCandidates();
  };

  const handleExperienceChange = (value) => {
    if (experienceFilters.includes(value)) {
      setExperienceFilters((prev) => prev.filter((val) => val !== value));
    } else {
      setExperienceFilters((prev) => [...prev, value]);
    }
    handleFilterSelect('experience', value);
  };

  const handleAvailabilityChange = (value) => {
    if (availabilityFilters.includes(value)) {
      setAvailabilityFilters((prev) =>
        prev.filter((val) => val !== value)
      );
    } else {
      setAvailabilityFilters((prev) => [...prev, value]);
    }
    handleFilterSelect('availability', value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
    <div className=" h-full mx-auto px-4 lg:px-12 flex flex-col lg:flex-row dark:bg-gray-900 dark:text-gray-100">
      <aside className="w-max sm:w-[200px] sm:hidden lg:w-1/6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md lg:mb-0 lg:mr-6 fixed lg:mt-10 lg:h-[calc(100vh-8rem)] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Filters</h2>
        <div className="mb-4">
          <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Experience</h3>
          <div>
            {['Entry', 'Mid', 'Senior'].map((exp) => (
              <label key={exp} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  value={exp}
                  checked={experienceFilters.includes(exp)}
                  onChange={() => handleExperienceChange(exp)}
                  className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded-full"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{exp} Level</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-md font-medium mb-2 text-gray-700 dark:text-gray-300">Availability</h3>
          <div>
            {['Full-time', 'Part-time', 'Contract'].map((avail) => (
              <label key={avail} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  value={avail}
                  checked={availabilityFilters.includes(avail)}
                  onChange={() => handleAvailabilityChange(avail)}
                  className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded-full"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{avail}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      <main className="w-full lg:w-fit ml-[25%] sm:mx-3">
        <div className="bg-white dark:bg-gray-800 p-6 mt-5 sm:ml-2 sm:p-1 rounded-lg shadow-lg sm:w-[calc(90%-3rem)] fixed w-[calc(75%-8rem)] z-10">
          <div className="flex sm:flex-col justify-center place-items-center">
            <SearchBar
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              handleClearSearch={() => setSearchTerm('')}
            />
            <span className="hidden sm:block" >

              <FilterListIcon className="text-gray-700 dark:text-gray-300" onClick={toggleFilters} />
            </span>
            <FilterList
              filters={selectedFilters}
              handleRemoveFilter={handleRemoveFilter}
            />
          </div>

          <FilterAside
            showFilters={showFilters}
            toggleFilters={toggleFilters}
            handleRemoveAllFilters={handleRemoveAllFilters}
            experienceFilters={experienceFilters}
            availabilityFilters={availabilityFilters}
            handleExperienceChange={handleExperienceChange}
            handleAvailabilityChange={handleAvailabilityChange}
            className={`fixed lg:h-[calc(100vh-5rem)] overflow-y-auto ${showFilters ? 'block' : 'hidden'}`}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-5 mt-[12%] sm:mt-[35%] sm:pr-4 lg:pr-20">
          {filteredCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
          {filteredCandidates.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 col-span-full py-12">
              No candidates found.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Findtalent;
