import React from "react";
import { FaBell, FaCommentDots } from "react-icons/fa";

const Notifications = () => {
  return (
    <div
      style={{
        width: "480px",
        background: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
        padding: "20px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #f0f0f0",
          paddingBottom: "15px",
        }}
      >
        <FaBell style={{ fontSize: "22px", color: "#007bff", cursor: "pointer" }} />
        <h2 style={{ fontSize: "20px", margin: "0", fontWeight: "bold" }}>Notifications</h2>
        <FaCommentDots style={{ fontSize: "22px", color: "#007bff", cursor: "pointer" }} />
      </div>
      <ul style={{ listStyle: "none", padding: "0", margin: "20px 0" }}>
        {[
          {
            name: "Kate Young",
            action: "Commented on your post",
            detail: "Great Shot Adam! Really enjoying the composition on this piece.",
            time: "5 mins ago",
            img: "https://static.vecteezy.com/system/resources/thumbnails/023/886/157/small_2x/young-smiling-businesswoman-standing-in-blur-background-of-office-generative-ai-photo.jpg",
          },
          {
            name: "Brandon Newman",
            action: "Liked your post: UI/UX Inspo",
            time: "21 mins ago",
            img: "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/A-girl-posing-in-nature-155624-pixahive.jpg?fit=2560%2C1707&ssl=1",
          },
          {
            name: "Dave Wood",
            action: "Commented on your post: Daily UI Challenge 049",
            time: "2 hrs ago",
            img: "https://img.freepik.com/free-photo/african-american-business-man-suit_1303-9838.jpg?semt=ais_hybrid",
          },
          {
            name: "Kate Young",
            action: "Commented on your post: Daily UI Challenge 049",
            time: "3 hrs ago",
            img: "https://media.gettyimages.com/id/1311977351/photo/focused-on-success-and-growth.jpg?s=612x612&w=gi&k=20&c=zSWN7pWSS0tJC4jRwi6SuEiRSvavnCGzj2F4dBgvjaA=",
          },
          {
            name: "Anna Lee",
            action: "Commented on your post",
            detail: "Woah! Loving these colours! Keep it up",
            time: "1 day ago",
            img: "https://static.vecteezy.com/system/resources/previews/006/918/154/non_2x/indian-boy-images-outdoor-hd-photo.jpg",
          },
        ].map((notification, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "15px 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <img
              src={notification.img}
              alt={notification.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <div style={{ flex: "1" }}>
              <h4
                style={{
                  margin: "0",
                  fontSize: "16px",
                  color: "#007bff",
                  fontWeight: "bold",
                }}
              >
                {notification.name}
              </h4>
              <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
                {notification.action}
                {notification.detail && <br />}
                <span>{notification.detail}</span>
              </p>
            </div>
            <span style={{ fontSize: "12px", color: "#aaa" }}>{notification.time}</span>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="/"
          style={{
            fontSize: "14px",
            color: "#007bff",
            textDecoration: "none",
          }}
        >
          See all incoming activity
        </a>
      </div>
    </div>
  );
};

export default Notifications;