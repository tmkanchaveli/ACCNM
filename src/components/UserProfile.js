import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <img
          className="user-profile-avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
        />
        <h1>Username</h1>
      </div>
      <div className="user-profile-tabs">
        <div
          className={`user-profile-tab ${
            activeTab === "overview" ? "active" : ""
          }`}
          onClick={() => handleClick("overview")}
        >
          Overview
        </div>
        <div
          className={`user-profile-tab ${
            activeTab === "apartment" ? "active" : ""
          }`}
          onClick={() => handleClick("apartment")}
        >
          My Apartment
        </div>
      </div>
      <div className="user-profile-content">
        {activeTab === "overview" && (
          <div className="user-profile-overview">
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              turpis porta, molestie mi vel, vehicula nisl. Vestibulum vel augue
              id ipsum sodales gravida. Curabitur rhoncus, lacus vel lacinia
              ultrices, sapien metus malesuada velit, nec rutrum tortor tellus
              eu arcu. Fusce quis eros ac ante sodales ultrices. Sed et lacus
              vestibulum, semper arcu eu, ultrices massa. Duis suscipit eget
              lorem non bibendum. Vestibulum id quam nunc.
            </p>
          </div>
        )}
        {activeTab === "apartment" && (
          <div className="user-profile-apartment">
            <h2>My Apartment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              turpis porta, molestie mi vel, vehicula nisl. Vestibulum vel augue
              id ipsum sodales gravida. Curabitur rhoncus, lacus vel lacinia
              ultrices, sapien metus malesuada velit, nec rutrum tortor tellus
              eu arcu. Fusce quis eros ac ante sodales ultrices. Sed et lacus
              vestibulum, semper arcu eu, ultrices massa. Duis suscipit eget
              lorem non bibendum. Vestibulum id quam nunc.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
