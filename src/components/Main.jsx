import React from 'react';
import GiantRobotLTDLogo from 'assets/GiantRobotLTDLogo';
import './Main.css';

export default () => {
  return (
    <div className="main">
      <div className="top-logo-container">
        <GiantRobotLTDLogo />
      </div>
      <div className="welcome-text">Welcome</div>
      <div className="about-yourself-text">
        Please tell us a bit about yourself to get started.
      </div>
    </div>
  );
};
