import React, { useState } from 'react';
import '../ProfilePage.css'; // Import the CSS file for styling

const ProfilePage = () => {
  // Default data for each section
  const [about, setAbout] = useState('Experienced software developer with a passion for building scalable web applications. Proficient in JavaScript, React, and Node.js. Strong problem-solving skills and a team player.');
  const [experience, setExperience] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      duration: 'Jan 2020 - Present',
      details: [
        'Developed and maintained scalable web applications using React and Node.js.',
        'Collaborated with cross-functional teams to deliver high-quality software.',
        'Implemented RESTful APIs for seamless integration with front-end systems.',
      ],
    },
    {
      id: 2,
      title: 'Intern',
      company: 'Startup Inc',
      duration: 'Jun 2019 - Dec 2019',
      details: [
        'Assisted in the development of a customer management system.',
        'Learned and applied best practices in software development.',
      ],
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: 1,
      institution: 'University of Tech',
      degree: 'Bachelor of Science in Computer Science',
      year: '2019',
    },
  ]);
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git']);
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'LinkedIn', url: 'https://linkedin.com/in/user' },
    { id: 2, platform: 'GitHub', url: 'https://github.com/user' },
  ]);

  // Handlers for adding and editing items
  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        id: experience.length + 1,
        title: '',
        company: '',
        duration: '',
        details: [],
      },
    ]);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        id: education.length + 1,
        institution: '',
        degree: '',
        year: '',
      },
    ]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { id: socialLinks.length + 1, platform: '', url: '' }]);
  };

  return (
    <div className="profile-page">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>Software Engineer | Tech Corp</p>
          <p>📍 San Francisco, CA</p>
        </div>
      </div>

      {/* About Section */}
      <div className="section">
        <h2>About</h2>
        <p>{about}</p>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Experience Section */}
      <div className="section">
        <h2>Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.title} - {exp.company}</h3>
            <p>{exp.duration}</p>
            <ul>
              {exp.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="edit-btn">Edit</button>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddExperience}>Add Experience</button>
      </div>

      {/* Education Section */}
      <div className="section">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree} ({edu.year})</p>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddEducation}>Add Education</button>
      </div>

      {/* Skills Section */}
      <div className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        <button className="add-btn" onClick={handleAddSkill}>Add Skill</button>
      </div>

      {/* Social Links Section */}
      <div className="section">
        <h2>Social Links</h2>
        {socialLinks.map((link) => (
          <div key={link.id} className="social-link-item">
            <p>
              <strong>{link.platform}:</strong> <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
            </p>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddSocialLink}>Add Social Link</button>
      </div>
    </div>
  );
};

export default ProfilePage;