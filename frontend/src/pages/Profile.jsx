import React, { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
async function fetchData(name) {
  try {
    const result = await axios.get(`http://localhost:3001/getProfile/${name}`)
    const profileData = result.data.profile;
    console.log(profileData);
    return profileData;
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

const ProfilePage = () => {

  const [data, setData] = useState([]);
  console.log(data)
  useEffect(()=>{ 
    async function loadProfile() {
      const data = await fetchData(localStorage.getItem('username'));
      if (data) {
        console.log(data);
        
        setData(data);
      }
    }
    loadProfile();
  },[])
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    title: "",
    languages: "",
    age: "",
    currentSalary: "",
    expectedSalary: "",
  });

  useEffect(() => {
    if (data.length > 0) {
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
  }, [data]); 
  
  const [description, setDescription] = useState(``);

  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    country: "",
    postcode: "",
    city: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState({
    basicInfo: false,
    description: false,
    contactInfo: false,
  });

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
      {/* Fixed Left Sidebar */}
      <div className="w-64 bg-gradient-to-r from-blue-600 to-purple-600 dark:bg-none dark:bg-gray-800 text-white fixed h-full p-6 shadow-2xl">
        {/* Profile Photo */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-sm text-blue-200 dark:text-indigo-400">Web Designer</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <NavLink href="#" label="Profile" />
          <NavLink href="#" label="My Resume" />
          <NavLink href="#" label="Change Password" />
          <NavLink href="#" label="Log Out" />
        </nav>
      </div>

    
      <div className="ml-64 flex-1 p-8">
    
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
      </div>
    </div>
  );
};


const EditableSection = ({ title, isEditing, onEdit, onSave, children, section, basicInfo, description, contactInfo }) => {
  const handleSave = async () => {
    try {
      await axios.patch(`http://localhost:3001/updateprofile/${localStorage.getItem('username')}`, {
        ...basicInfo,
        description,
        ...contactInfo,
        skills: data[0].skills,
        level: data[0].level,
        experience: data[0].experience,
        education: data[0].education,
      });
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    onSave();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        <button
          onClick={isEditing ? handleSave : onEdit}
          className="bg-blue-500 dark:bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-indigo-700 transition-all duration-300"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      {children}
    </div>
  );
};

const EditableField = ({ label, value, isEditing, onChange, isTextArea }) => (
  <div className="mb-4">
    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</label>
    {isEditing ? (
      isTextArea ? (
        <textarea
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      )
    ) : (
      <p className="text-lg text-gray-900 dark:text-gray-100">{value}</p>
    )}
  </div>
);

const handleLogout = () => {
  localStorage.removeItem("token");
  const navigate = useNavigate();
  navigate("/login");
};

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="block text-lg text-blue-500 dark:text-indigo-600 font-medium hover:text-blue-600 dark:hover:bg-blue-50 dark:hover:bg-indigo-700 p-2 rounded-lg transition-all duration-300"
  onClick={handleLogout}>
    {label}
  </a>
);

export default ProfilePage;
