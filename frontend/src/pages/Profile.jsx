import React, { useState } from "react";

const Profile = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditMenu1, setShowEditMenu1] = useState(false);
  const [showEditMenu2, setShowEditMenu2] = useState(false);

  const toggleProfileMenu = () => setShowProfileMenu((prev) => !prev);
  const toggleMoreMenu = () => setShowMoreMenu((prev) => !prev);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleEditMenu1 = () => setShowEditMenu1((prev) => !prev);
  const toggleEditMenu2 = () => setShowEditMenu2((prev) => !prev);

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f3f2ef",
    },
    header: {
      width: "100%",
      height: "220px",
      backgroundColor: "#0073b1",
      position: "relative",
    },
    profileImageContainer: {
      position: "absolute",
      bottom: "-100px",
      left: "30px",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      border: "5px solid #ffffff",
      overflow: "hidden",
      backgroundColor: "#fff",
    },
    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    nameSection: {
      marginTop: "120px",
      marginLeft: "50px",
    },
    name: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    description: {
      fontSize: "16px",
      color: "#555",
      marginTop: "5px",
    },
    stats: {
      fontSize: "14px",
      marginTop: "5px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    rightOptions: {
      position: "absolute",
      top: "340px",
      right: "30px",
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#ffffff",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
      cursor: "pointer",
      color: "#000",
    },
    dots: {
      fontSize: "18px",
      cursor: "pointer",
      color: "#000",
    },
    editIcon: {
      fontSize: "20px",
      color: "#0073b1",
      cursor: "pointer",
    },
    dropdown: {
      position: "absolute",
      top: "400px",
      right: "30px",
      background: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      padding: "10px",
      width: "250px",
    },
    dropdownItem: {
      padding: "10px",
      cursor: "pointer",
      color: "#0073b1",
      fontSize: "14px",
      borderBottom: "1px solid #ddd",
    },
    profileForm: {
      marginTop: "20px",
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#0073b1",  // Change background color to blue
      border: "1px solid #0073b1",  // Border color to blue
      borderRadius: "5px",
      fontSize: "14px",
      cursor: "pointer",
      color: "#ffffff",  // Change text color to white
    },
    inputField: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    submitButton: {
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#0073b1",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      marginTop: "10px",
    },
    aboutSection: {
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    aboutHeading: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#0073b1",
    },
    aboutContent: {
      fontSize: "16px",
      color: "#555",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.profileImageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPuf2ZlP6bbOp_29p90V0u1fUHslZP_qTfQ&s"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
      </div>

      <div style={styles.rightOptions}>
        <button style={styles.button} onClick={toggleProfileMenu}>
          Add profile section
        </button>
        <button style={styles.button} onClick={toggleDropdown}>
          Open To
        </button>
        <div style={styles.dots} onClick={toggleMoreMenu}>
          ⋮
        </div>
        <span style={styles.editIcon} onClick={toggleEditMenu1}>
          ✎
        </span>
      </div>

      <div style={styles.nameSection}>
        <div style={styles.name}>John Doe</div>
        <div style={styles.description}>
          LinkedIn Trainer, Speaker & Consultant | Author, POWER FORMULA FOR
          LINKEDIN SUCCESS | LinkedIn Expert | Social Selling | 1 on 1 LinkedIn
          Consultations | LinkedIn Strategy Consulting | Keynote Speaker |
          LinkedIn Coaching
        </div>
        <div style={styles.stats}>
          Greater Milwaukee Area · See 500+ connections
          <span style={styles.editIcon} onClick={toggleEditMenu2}>
            ✎
          </span>
        </div>
      </div>

      {/* About Section */}
      <div style={styles.aboutSection}>
        <div style={styles.aboutHeading}>About</div>
        <div style={styles.aboutContent}>
          Contact me at wayne@powerformula.net or 414.313.7785. I am a
          nationally recognized LinkedIn consultant, speaker, and trainer. I
          have helped more than 100,000 businesspeople—from entry level to
          CEO—understand how LinkedIn can work for them.
        </div>
      </div>

      {/* Profile Section Form */}
      {showProfileMenu && (
        <div style={styles.profileForm}>
          <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>Add to Profile</h3>
          {["Education", "Position", "Career", "Skills"].map((field, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <label style={{ fontSize: "14px", fontWeight: "bold" }}>{field}:</label>
              <input
                type="text"
                style={{
                  ...styles.inputField,
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "0",
                  padding: "5px",
                  marginTop: "5px",
                }}
              />
            </div>
          ))}
          <button style={styles.submitButton}>Save</button>
        </div>
      )}

      {/* More Options Menu */}
      {showMoreMenu && (
        <div style={styles.dropdown}>
          {[
            { icon: "✉", label: "Share profile via message" },
            { icon: "🔗", label: "Share profile via..." },
            { icon: "📇", label: "Contact info" },
            { icon: "👤", label: "Personal demographic information" },
            { icon: "📊", label: "Activity" },
            { icon: "📁", label: "My items" },
            { icon: "ℹ", label: "About this profile" },
          ].map((item, index) => (
            <div key={index} style={styles.dropdownItem}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
        </div>
      )}
      
      <div style={{ 
        position: "absolute", 
        top: "276px", 
        left: "200px", 
        fontSize: "24px", 
        color: "#0073b1", 
        cursor: "pointer", 
        backgroundColor: "#fff", 
        borderRadius: "50%", 
        padding: "8px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
      }}>
        📷
      </div>

      {/* Dropdown for Hiring & Providing Services */}
      {showDropdown && (
        <div style={styles.dropdown}>
          <div style={styles.dropdownItem}>Hiring</div>
          <div style={styles.dropdownItem}>Providing Services</div>
        </div>
      )}
    </div>
  );
};

export default Profile;