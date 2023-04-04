import React from "react";
import "./Wall.css";

const Wall = () => {
  return (
    <div className="wall-container">
      <div className="wall-header">
        <h2>Community Wall</h2>
        <button className="create-post-btn">Create Post</button>
      </div>
      <div className="post-container">
        <div className="post">
          <img
            className="avatar"
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
          />
          <div className="post-body">
            <h4 className="post-author">John Smith</h4>
            <p className="post-content">
              Just moved in! Anyone know the best places to eat nearby?
            </p>
            <div className="post-actions">
              <button className="like-btn">Like</button>
              <button className="comment-btn">Comment</button>
            </div>
          </div>
        </div>
        <div className="post">
          <img
            className="avatar"
            src="https://www.w3schools.com/w3images/avatar3.png"
            alt="Avatar"
          />
          <div className="post-body">
            <h4 className="post-author">Jane Doe</h4>
            <p className="post-content">
              Looking for a roommate! DM me if interested.
            </p>
            <div className="post-actions">
              <button className="like-btn">Like</button>
              <button className="comment-btn">Comment</button>
            </div>
          </div>
        </div>
        <div className="post">
          <img
            className="avatar"
            src="https://www.w3schools.com/w3images/avatar4.png"
            alt="Avatar"
          />
          <div className="post-body">
            <h4 className="post-author">Mike Johnson</h4>
            <p className="post-content">
              Just had a great experience with the maintenance team, thanks
              guys!
            </p>
            <div className="post-actions">
              <button className="like-btn">Like</button>
              <button className="comment-btn">Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
