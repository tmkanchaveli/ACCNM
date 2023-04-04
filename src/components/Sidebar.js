import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/community/task" className="sidebar-link">
            Task
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/community/report" className="sidebar-link">
            Report
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/community/billing" className="sidebar-link">
            Billing
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/community/helpdesk" className="sidebar-link">
            Help Desk
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
