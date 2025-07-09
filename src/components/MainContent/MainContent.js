import React from 'react';
import Profile from '../Profile/Profile';
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Profile />
      <WorkExperience />
      <Projects />
    </div>
  );
};

export default MainContent;