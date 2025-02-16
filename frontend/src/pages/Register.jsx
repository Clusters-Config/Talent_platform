import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      background: 'url("https://oreed.org/cdn/1619638329_6089b83993722/1684839216_646c9b3005ac6/1686037233_647ee2f15ed5c/1686037233_647ee2f15e870.png") no-repeat center center/cover',
      height: "100vh",
      display: "flex",

    
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: "80%",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: "90%",
      maxWidth: "700px",
      height: "80%",
      background: "rgba(255, 255, 255, 0.9)",
      display: "flex",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    leftHalf: {
      flex: 1,
      background: 'url("https://oreed.org/cdn/1619638329_6089b83993722/1684839216_646c9b3005ac6/1686037233_647ee2f15ed5c/1686037233_647ee2f15e870.png") no-repeat center center/cover',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      padding: "20px",
    },
    leftHalfText: {
      fontSize: "16px",
      marginBottom: "10px",
    },
    rightHalf: {
      flex: 1,
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    formTitle: {
      fontSize: "24px",
      marginBottom: "10px",
      textAlign: "center",
    },
    inputGroup: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    icon: {
      position: "absolute",
      left: "10px",
      color: "#007BFF",
      fontSize: "18px",
    },
    input: {
      width: "100%",
      padding: "10px 10px 10px 40px",
      border: "1px solid #ccc",
      borderRadius: "20px",
      fontSize: "16px",
      height:"35px",
    },
    button: {
      height:"35px",

      padding: "0px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "15px",
      fontSize: "18px",
      cursor: "pointer",
      textTransform: "uppercase",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    divider: {
      textAlign: "center",
      fontSize: "14px",
      margin: "10px 0",
      color: "#555",
      
    },
    googleButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ccc",
      borderRadius: "15px",
      fontSize: "16px",
      cursor: "pointer",
      height:"35px",

    },
    googleIcon: {
      fontSize: "20px",
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.leftHalf}>
            <h1>Welcome Back!</h1>
            <p style={styles.leftHalfText}>
              Join us and explore the amazing opportunities ahead to Sign Up
            </p>
          </div>
          <div style={styles.rightHalf}>
            <form style={styles.form}>
              <h2 style={styles.formTitle}>Create Your Account</h2>
              <div style={styles.inputGroup}>
                <FaUser style={styles.icon} />
                <input style={styles.input} type="text" placeholder="First Name" required />
              </div>
              <div style={styles.inputGroup}>
                <FaUser style={styles.icon} />
                <input style={styles.input} type="text" placeholder="Last Name" required />
              </div>
              <div style={styles.inputGroup}>
                <FaEnvelope style={styles.icon} />
                <input style={styles.input} type="email" placeholder="Email Address" required />
              </div>
              <div style={styles.inputGroup}>
                <FaLock style={styles.icon} />
                <input style={styles.input} type="password" placeholder="Password" required />
              </div>
              <button style={styles.button} type="submit">
                Sign Up
              </button>
              <div style={styles.divider}>OR</div>
              <button style={styles.googleButton} type="button">
                <FcGoogle style={styles.googleIcon} /> Sign Up with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;