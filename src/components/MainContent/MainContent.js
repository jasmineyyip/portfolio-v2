import React from 'react';
import Profile from '../Profile/Profile';
import AboutMe from '../AboutMe/AboutMe'
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Profile />
      <AboutMe />
      <WorkExperience />
      <Projects />
    </div>
  );
};

export default MainContent;