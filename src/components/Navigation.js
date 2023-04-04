import React from "react";
import { Link } from "@reach/router";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="nav-link">
            Chat
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/community" className="nav-link">
            Community
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/maintenance-requests" className="nav-link">
            Maintenance Requests
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user-profile" className="nav-link">
            User Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
