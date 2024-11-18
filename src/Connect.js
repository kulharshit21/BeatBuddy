import React from 'react';
import './Connect.css';

const Connect = () => {
  return (
    <div className="connect-container">
      {/* Main content goes here */}
      <div className="header-bar">
        {/* Add a thin white bright line */}
        <div className="top-line"></div>
        <div className="nav-bar">
          {/* Three bars to the left */}
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {/* Search box */}
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          {/* Post option */}
          <div className="post-option">Post</div>
          {/* Notification symbol */}
          <div className="notification">
            <span className="icon">🔔</span>
          </div>
          {/* Message symbol */}
          <div className="message">
            <span className="icon">✉️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
