import React from 'react';
import Profile from '../Profile/Profile';
import AboutMe from '../AboutMe/AboutMe'
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import Hobbies from '../Hobbies/Hobbies';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Profile />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Hobbies />
    </div>
  );
};

export default MainContent;