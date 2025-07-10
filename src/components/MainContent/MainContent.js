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
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="work-experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="hobbies">
        <Hobbies />
      </section>
    </div>
  );
};

export default MainContent;