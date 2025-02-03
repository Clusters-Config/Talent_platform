import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    headline: "Software Developer | JavaScript Enthusiast",
    email: "john.doe@example.com",
    bio: "Passionate software developer with experience in building scalable web applications. Always eager to learn new technologies and improve my skills.",
    location: "San Francisco, CA",
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2021 - Present",
        description: "Developing user-friendly web applications using React and Tailwind CSS."
      },
      {
        title: "Web Developer Intern",
        company: "Startup Co.",
        duration: "Jun 2020 - Dec 2020",
        description: "Assisted in the development of various web projects and learned best practices in coding."
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        graduationYear: 2020
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "CSS", "Tailwind CSS"],
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mx-4">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <img 
            src="https://randomuser.me/api/portraits/men/10.jpg" 
            alt="Profile" 
            className="rounded-full w-32 h-32 border-2 border-gray-300"
          />
          <div className="ml-4">
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.headline}</p>
            <p className="text-gray-600">{user.location}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-gray-700 mt-2">{user.bio}</p>
        </div>

        {/* Experience Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Experience</h3>
          {user.experience.map((job, index) => (
            <div key={index} className="mt-2">
              <h4 className="font-semibold">{job.title} at {job.company}</h4>
              <p className="text-gray-600">{job.duration}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Education</h3>
          {user.education.map((edu, index) => (
            <div key={index} className="mt-2">
              <h4 className="font-semibold">{edu.degree} from {edu.institution}</h4>
              <p className="text-gray-600">Graduated in {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Skills</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Connect with me</h3>
          <div className="flex space-x-4 mt-2">
            <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Twitter</a>
            <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
            <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
