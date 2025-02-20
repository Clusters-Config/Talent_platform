import React, { useState } from "react";

const ProfilePage = () => {
  // State for editable fields
  const [basicInfo, setBasicInfo] = useState({
    name: "Alexander Weir",
    title: "Web Designer",
    languages: "English",
    age: "32 Years",
    currentSalary: "2000$",
    expectedSalary: "2500$",
  });

  const [description, setDescription] = useState("David Matin - Web Developer");

  const [contactInfo, setContactInfo] = useState({
    phone: "+1 123 456 7890",
    email: "info@example.com",
    country: "Country Name",
    postcode: "112233",
    city: "London",
    address: "New York City",
  });

  const [isEditing, setIsEditing] = useState({
    basicInfo: false,
    description: false,
    contactInfo: false,
  });

  // Handle input changes
  const handleChange = (section, field, value) => {
    if (section === "basicInfo") {
      setBasicInfo({ ...basicInfo, [field]: value });
    } else if (section === "contactInfo") {
      setContactInfo({ ...contactInfo, [field]: value });
    } else if (section === "description") {
      setDescription(value);
    }
  };

  // Toggle edit mode
  const toggleEdit = (section) => {
    setIsEditing({ ...isEditing, [section]: !isEditing[section] });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex">
      {/* Fixed Left Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-purple-600 text-white fixed h-full p-6 shadow-2xl">
        {/* Profile Photo */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold">Alexander Weir</h2>
          <p className="text-sm text-blue-200">Web Designer</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <NavLink href="#" label="Profile" />
          <NavLink href="#" label="My Resume" />
          <NavLink href="#" label="Saved Jobs" />
          <NavLink href="#" label="Applied Jobs" />
          <NavLink href="#" label="Job Alerts" />
          <NavLink href="#" label="CV Manager" />
          <NavLink href="#" label="Change Password" />
          <NavLink href="#" label="Log Out" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Basic Information Section */}
        <EditableSection
          title="Basic Information"
          isEditing={isEditing.basicInfo}
          onEdit={() => toggleEdit("basicInfo")}
          onSave={() => toggleEdit("basicInfo")}
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
      </div>
    </div>
  );
};

// Reusable Editable Section Component
const EditableSection = ({ title, isEditing, onEdit, onSave, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <button
        onClick={isEditing ? onSave : onEdit}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
    {children}
  </div>
);

// Reusable Editable Field Component
const EditableField = ({ label, value, isEditing, onChange, isTextArea }) => (
  <div className="mb-4">
    <label className="block text-sm text-gray-600 mb-1">{label}</label>
    {isEditing ? (
      isTextArea ? (
        <textarea
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )
    ) : (
      <p className="text-lg text-gray-800">{value}</p>
    )}
  </div>
);

// Reusable NavLink Component
const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="block text-sm text-blue-200 hover:text-white hover:bg-blue-700 p-2 rounded-lg transition-all duration-300"
  >
    {label}
  </a>
);

export default ProfilePage;