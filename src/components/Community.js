import React from "react";
import "./Community.css";
import Wall from "./Wall";
import Sidebar from "./Sidebar";

const Community = () => {
  return (
    <div className="community-container">
      <div className="community-wall">
        <Wall />
      </div>
      <div className="community-sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Community;
