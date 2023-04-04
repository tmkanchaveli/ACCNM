import React from "react";
import "./Chat.css";

const Chat = () => {
  const chatMessages = [
    {
      sender: "Resident",
      message: "Hi! Is the water supply issue resolved?",
      timestamp: "10:05 AM"
    },
    {
      sender: "Manager",
      message: "Hello! Yes, the water supply issue has been resolved.",
      timestamp: "10:10 AM"
    },
    {
      sender: "Resident",
      message: "Great! Thanks for the update.",
      timestamp: "10:15 AM"
    },
    {
      sender: "Manager",
      message: "You're welcome! Let us know if you have any other concerns.",
      timestamp: "10:20 AM"
    }
  ];

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat</h2>
      </div>
      <div className="chat-messages">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender.toLowerCase()}`}
          >
            <div className="message-content">{msg.message}</div>
            <div className="message-timestamp">{msg.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
