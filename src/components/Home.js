import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to our Apartment Management App</h1>
        <p>Streamline your living with our user-friendly platform</p>
        <button>Get Started</button>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Task Management</h2>
          <p>
            Stay organized with a platform designed for your communal living
          </p>
          <button>Learn More</button>
        </div>
        <div className="feature">
          <h2>Bill Payments</h2>
          <p>Conveniently pay your bills directly through the app</p>
          <button>Learn More</button>
        </div>
        <div className="feature">
          <h2>Community Building</h2>
          <p>Connect with your neighbors and build a stronger community</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
