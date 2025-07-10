import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about-me');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    console.log(`Navigate to ${sectionId}`);

    // Move the scroll logic from Header/Sidebar here
    const container = document.querySelector('.main-content');
    const target = document.getElementById(sectionId);

    if (container && target) {
      const targetOffsetTop = target.offsetTop;
      const offset = 60;
      container.scrollTo({
        top: targetOffsetTop - offset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <div className="main-layout">
        <Sidebar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />
        <MainContent />
      </div>
    </div>
  );
}

export default App;