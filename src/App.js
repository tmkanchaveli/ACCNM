import React from "react";
import { Router, Link } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Community from "./components/Community";
import Chat from "./components/Chat";
import MaintenanceRequests from "./components/MaintenanceRequests";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Community path="/community" />
        <Chat path="/chat" />
        <MaintenanceRequests path="/maintenance-requests" />
        <UserProfile path="/user-profile" />
      </Router>
    </div>
  );
}

export default App;
