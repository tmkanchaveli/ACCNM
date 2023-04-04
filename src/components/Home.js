import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to our Apartment Management App</h1>
        <p>Streamline your living with our user-friendly platform</p>
        <button>Get Started</button>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Task Management</h3>
            <p>
              Stay organized with a platform designed for your communal living
            </p>
            <button>Learn More</button>
          </div>
          <div className="feature-card">
            <h3>Bill Payments</h3>
            <p>Conveniently pay your bills directly through the app</p>
            <button>Learn More</button>
          </div>
          <div className="feature-card">
            <h3>Community Building</h3>
            <p>Connect with your neighbors and build a stronger community</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Join Our Community</h2>
        <p>Start managing your community better with our platform.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
