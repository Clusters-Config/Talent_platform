import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import EditableField from '../components/EditableField';
import EditableSection from '../components/EditableSection';

async function fetchData(name) {
  try {
    const result = await axios.get(`http://localhost:3001/getProfile/${name}`);
    const profileData = result.data.profile;
    console.log(profileData);
    return profileData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    title: "",
    languages: "",
    age: "",
    currentSalary: "",
    expectedSalary: "",
  });
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "haridev@gmail.com",
    country: "India",
    postcode: "636008",
    city: "Salem",
    address: "34, Example Street, Salem",
  });
  const [isEditing, setIsEditing] = useState({
    basicInfo: false,
    description: false,
    contactInfo: false,
  });

  useEffect(() => {
    async function loadProfile() {
      const data = await fetchData(localStorage.getItem("username"));
      if (data) {
        setData(data);
        setBasicInfo({
          name: data[0].name,
          title: data[0].title,
          languages: data[0].languages,
          age: data[0].age,
          currentSalary: data[0].currentSalary,
          expectedSalary: data[0].expectedSalary,
        });
        setDescription(data[0].description);
      }
    }
    loadProfile();
  }, []);

  const handleChange = (section, field, value) => {
    if (section === "basicInfo") {
      setBasicInfo({ ...basicInfo, [field]: value });
    } else if (section === "contactInfo") {
      setContactInfo({ ...contactInfo, [field]: value });
    } else if (section === "description") {
      setDescription(value);
    }
  };

  const toggleEdit = (section) => {
    setIsEditing({ ...isEditing, [section]: !isEditing[section] });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
      {/* Fixed Left Sidebar */}
      <div className="w-64 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white fixed h-full p-6 shadow-2xl">
        {/* Profile Photo */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold">{basicInfo.name}</h2>
          <p className="text-sm text-blue-200 dark:text-indigo-400">{basicInfo.title}</p>
        </div>

        {/* Profile Completeness */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-2">Profile Completeness</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-400 dark:bg-indigo-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-xs mt-1 text-blue-200 dark:text-indigo-400">75% Complete</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <NavLink href="#" label="Profile" />
          <NavLink href="#" label="My Resume" />
          <NavLink href="#" label="Change Password" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Add this button at the top of the page */}
        <button
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-bold py-2 px-4 rounded"
          onClick={() => window.history.back()}
        >
          Back
        </button>

        {/* Basic Information Section */}
        <EditableSection
          title="Basic Information"
          isEditing={isEditing.basicInfo}
          onEdit={() => toggleEdit("basicInfo")}
          onSave={() => toggleEdit("basicInfo")}
          section="basicInfo"
          basicInfo={basicInfo}
          description={description}
          contactInfo={contactInfo}
        >
          <EditableField
            label="Your Name"
            value={basicInfo.name}
            isEditing={isEditing.basicInfo}
            onChange={(e) => handleChange("basicInfo", "name", e.target.value)}
          />
          <EditableField
            label="Professional Title"
            value={basicInfo.title}
            isEditing={isEditing.basicInfo}
            onChange={(e) => handleChange("basicInfo", "title", e.target.value)}
          />
          <EditableField
            label="Languages"
            value={basicInfo.languages}
            isEditing={isEditing.basicInfo}
            onChange={(e) => handleChange("basicInfo", "languages", e.target.value)}
          />
          <EditableField
            label="Age"
            value={basicInfo.age}
            isEditing={isEditing.basicInfo}
            onChange={(e) => handleChange("basicInfo", "age", e.target.value)}
          />
          <EditableField
            label="Current Salary ($)"
            value={basicInfo.currentSalary}
            isEditing={isEditing.basicInfo}
            onChange={(e) => handleChange("basicInfo", "currentSalary", e.target.value)}
          />
          <EditableField
            label="Expected Salary"
            value={basicInfo.expectedSalary}
            isEditing={isEditing.basicInfo}
            onChange={(e) => handleChange("basicInfo", "expectedSalary", e.target.value)}
          />
        </EditableSection>

        {/* Description Section */}
        <EditableSection
          title="Description"
          isEditing={isEditing.description}
          onEdit={() => toggleEdit("description")}
          onSave={() => toggleEdit("description")}
          section="description"
          basicInfo={basicInfo}
          description={description}
          contactInfo={contactInfo}
        >
          <EditableField
            label="Description"
            value={description}
            isEditing={isEditing.description}
            onChange={(e) => handleChange("description", "description", e.target.value)}
            isTextArea
          />
        </EditableSection>

        {/* Contact Information Section */}
        <EditableSection
          title="Contact Information"
          isEditing={isEditing.contactInfo}
          onEdit={() => toggleEdit("contactInfo")}
          onSave={() => toggleEdit("contactInfo")}
          section="contactInfo"
          basicInfo={basicInfo}
          description={description}
          contactInfo={contactInfo}
        >
          <EditableField
            label="Phone"
            value={contactInfo.phone}
            isEditing={isEditing.contactInfo}
            onChange={(e) => handleChange("contactInfo", "phone", e.target.value)}
          />
          <EditableField
            label="Email Address"
            value={contactInfo.email}
            isEditing={isEditing.contactInfo}
            onChange={(e) => handleChange("contactInfo", "email", e.target.value)}
          />
          <EditableField
            label="Country"
            value={contactInfo.country}
            isEditing={isEditing.contactInfo}
            onChange={(e) => handleChange("contactInfo", "country", e.target.value)}
          />
          <EditableField
            label="Postcode"
            value={contactInfo.postcode}
            isEditing={isEditing.contactInfo}
            onChange={(e) => handleChange("contactInfo", "postcode", e.target.value)}
          />
          <EditableField
            label="City"
            value={contactInfo.city}
            isEditing={isEditing.contactInfo}
            onChange={(e) => handleChange("contactInfo", "city", e.target.value)}
          />
          <EditableField
            label="Full Address"
            value={contactInfo.address}
            isEditing={isEditing.contactInfo}
            onChange={(e) => handleChange("contactInfo", "address", e.target.value)}
          />
        </EditableSection>

        {/* Skills Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {data[0]?.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-indigo-700 text-blue-800 dark:text-indigo-100 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfilePage;