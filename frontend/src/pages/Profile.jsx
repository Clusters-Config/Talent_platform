import React from 'react';
import './Profile.css'; // Import your CSS file for styling

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Software Engineer',
        duration: 'Jan 2020 - Present',
        description: 'Lead a team of developers to build scalable web applications.'
      },
      {
        company: 'Innovate Inc',
        position: 'Software Engineer',
        duration: 'Jun 2016 - Dec 2019',
        description: 'Developed and maintained internal tools and customer-facing applications.'
      }
    ]
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{user.name}</h1>
        <h2>{user.title}</h2>
        <p>{user.location}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>

      <div className="profile-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h3>Work Experience</h3>
        {user.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h4>{exp.company}</h4>
            <p>{exp.position}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;