import React, { useState } from 'react';
import './ProfilePage.css'; // Import the CSS file for styling

const ProfilePage = () => {
  // Default data for each section
  const [about, setAbout] = useState('Experienced software developer with a passion for building scalable web applications.');
  const [experience, setExperience] = useState([
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', duration: 'Jan 2020 - Present' },
    { id: 2, title: 'Intern', company: 'Startup Inc', duration: 'Jun 2019 - Dec 2019' },
  ]);
  const [education, setEducation] = useState([
    { id: 1, institution: 'University of Tech', degree: 'Bachelor of Science in Computer Science', year: '2019' },
  ]);
  const [skills, setSkills] = useState([
    { id: 1, skill: 'JavaScript' },
    { id: 2, skill: 'React' },
    { id: 3, skill: 'Node.js' },
  ]);
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'LinkedIn', url: 'https://linkedin.com/in/user' },
    { id: 2, platform: 'GitHub', url: 'https://github.com/user' },
  ]);

  // Handlers for adding and canceling items
  const handleAddExperience = () => {
    setExperience([...experience, { id: experience.length + 1, title: '', company: '', duration: '' }]);
  };

  const handleCancelExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const handleAddEducation = () => {
    setEducation([...education, { id: education.length + 1, institution: '', degree: '', year: '' }]);
  };

  const handleCancelEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const handleAddSkill = () => {
    setSkills([...skills, { id: skills.length + 1, skill: '' }]);
  };

  const handleCancelSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { id: socialLinks.length + 1, platform: '', url: '' }]);
  };

  const handleCancelSocialLink = (id) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>

      {/* User Profile Section */}
      <div className="section">
        <h2>User Profile</h2>
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          <button>Change Picture</button>
        </div>
      </div>

      {/* About Section */}
      <div className="section">
        <h2>About</h2>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Tell us about yourself..."
        />
        <div className="buttons">
          <button>Save</button>
          <button onClick={() => setAbout('')}>Cancel</button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="section">
        <h2>Experience</h2>
        {experience.map(exp => (
          <div key={exp.id} className="experience-item">
            <input type="text" placeholder="Job Title" defaultValue={exp.title} />
            <input type="text" placeholder="Company" defaultValue={exp.company} />
            <input type="text" placeholder="Duration" defaultValue={exp.duration} />
            <button onClick={() => handleCancelExperience(exp.id)}>Cancel</button>
          </div>
        ))}
        <button onClick={handleAddExperience}>Add Experience</button>
      </div>

      {/* Education Section */}
      <div className="section">
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="education-item">
            <input type="text" placeholder="Institution" defaultValue={edu.institution} />
            <input type="text" placeholder="Degree" defaultValue={edu.degree} />
            <input type="text" placeholder="Year" defaultValue={edu.year} />
            <button onClick={() => handleCancelEducation(edu.id)}>Cancel</button>
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>

      {/* Skills Section */}
      <div className="section">
        <h2>Skills</h2>
        {skills.map(skill => (
          <div key={skill.id} className="skill-item">
            <input type="text" placeholder="Skill" defaultValue={skill.skill} />
            <button onClick={() => handleCancelSkill(skill.id)}>Cancel</button>
          </div>
        ))}
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>

      {/* Social Links Section */}
      <div className="section">
        <h2>Social Links</h2>
        {socialLinks.map(link => (
          <div key={link.id} className="social-link-item">
            <input type="text" placeholder="Platform" defaultValue={link.platform} />
            <input type="text" placeholder="URL" defaultValue={link.url} />
            <button onClick={() => handleCancelSocialLink(link.id)}>Cancel</button>
          </div>
        ))}
        <button onClick={handleAddSocialLink}>Add Social Link</button>
      </div>
    </div>
  );
};

export default ProfilePage;