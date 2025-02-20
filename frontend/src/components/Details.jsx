import { useState } from "react";

export default function ProfilePage() {
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [inputValues, setInputValues] = useState({ workExperience: "", education: "", skills: "", certifications: "" });

  const handleChange = (type, value) => {
    setInputValues(prev => ({ ...prev, [type]: value }));
  };

  const addEntry = (type, setType) => {
    const key = type.toLowerCase().replace(" ", "");
    if (!inputValues[key].trim()) return;
    setType(prev => [...prev, inputValues[key]]);
    setInputValues(prev => ({ ...prev, [key]: "" }));
  };

  const editEntry = (type, setType, index) => {
    const updatedEntry = prompt(`Edit ${type} details:`, type[index]);
    if (!updatedEntry) return;
    setType(prev => prev.map((item, i) => (i === index ? updatedEntry : item)));
  };

  const deleteEntry = (setType, index) => {
    setType(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      
      {[{
        title: "Work Experience",
        data: workExperience,
        setData: setWorkExperience
      }, {
        title: "Education",
        data: education,
        setData: setEducation
      }, {
        title: "Skills",
        data: skills,
        setData: setSkills
      }, {
        title: "Certifications",
        data: certifications,
        setData: setCertifications
      }].map(({ title, data, setData }) => (
        <section key={title}>
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex gap-2 mb-2">
            <input 
              type="text" 
              value={inputValues[title.toLowerCase().replace(" ", "")] || ""} 
              onChange={(e) => handleChange(title.toLowerCase().replace(" ", ""), e.target.value)} 
              className="border p-1 rounded w-full"
              placeholder={`Enter ${title} details...`} 
            />
            <button onClick={() => addEntry(title, setData)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Add</button>
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-1 border-b">
                {item} 
                <div>
                  <button onClick={() => editEntry(data, setData, index)} className="text-yellow-500 mr-2">Edit</button>
                  <button onClick={() => deleteEntry(setData, index)} className="text-red-500">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
// Compare this snippet from Talent_platform/frontend/src/components/Details.jsx:
