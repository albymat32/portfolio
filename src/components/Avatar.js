import React from "react";
import avatarImage from "../assets/avatar.jpeg";
import albyImage from "../assets/alby.jpg";
import "./Avatar.css"; // Import your CSS file

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img src={avatarImage} alt="Avatar" className="avatar-image" />
      <img src={albyImage} alt="Alby Thekkedan" className="profile-image-a" />
    </div>
  );
};

export default Avatar;
