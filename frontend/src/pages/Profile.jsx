import React from 'react';
import '../ProfilePage.css'; // Import your CSS file for styling

const ProfilePage = () => {
  // Sample user data (replace with dynamic data from an API or state)
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
    about: 'Experienced software developer with a passion for building scalable web applications.',
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Software Engineer',
        duration: 'Jan 2020 - Present',
        description: 'Led a team of developers to build and maintain enterprise-level applications.',
      },
      {
        company: 'Innovate Solutions',
        position: 'Software Engineer',
        duration: 'Jun 2016 - Dec 2019',
        description: 'Developed and maintained web applications using React and Node.js.',
      },
    ],
    education: [
      {
        institution: 'University of Tech',
        degree: 'Bachelor of Science in Computer Science',
        duration: '2012 - 2016',
      },
    ],
    skills: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Python'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
  };

  return (
    <div className="profile-page">
      {/* Profile Section */}
      <div className="profile-section">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h1>{user.name}</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>{user.about}</p>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2>Experience</h2>
        {user.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        {user.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Social Links Section */}
      <div className="social-section">
        <h2>Connect with Me</h2>
        <div className="social-links">
          <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;