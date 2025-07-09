import React from 'react';
import Profile from '../Profile/Profile';
import WorkExperience from '../WorkExperience/WorkExperience';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Profile />
      <WorkExperience />
    </div>
  );
};

export default MainContent;