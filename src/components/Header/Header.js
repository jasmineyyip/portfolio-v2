import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/yip_logo.png';
import './Header.css';

const Header = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearchClick = () => {
        setIsSearchFocused(true);
        setShowDropdown(true);
    };

    const handleSearchBlur = () => {
        // Delay hiding dropdown to allow clicking on items
        setTimeout(() => {
            setIsSearchFocused(false);
            setShowDropdown(false);
        }, 200);
    };

    const handleDropdownClick = (section) => {
        console.log(`Navigate to ${section}`);
        setShowDropdown(false);
        setIsSearchFocused(false);
    };

    // Hides the menu drop down when clicked away
    useEffect(() => {
        const handleClickOutside = () => {
            if (showDropdown) {
                setShowDropdown(false);
                setIsSearchFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <header className="header">
            <div className="header-content">
                {/* Left - Logo/Icon */}
                <div className="header-logo">
                    <img
                        src={logo}
                        alt="Portfolio Logo"
                        className="logo-image"
                    />
                </div>

                {/* Mobile Navigation - only visible on mobile */}
                <div className="mobile-nav">
                    <div
                        className="mobile-nav-item"
                        onClick={() => handleDropdownClick('about-me')}
                    >
                        About Me
                    </div>
                    <div
                        className="mobile-nav-item"
                        onClick={() => handleDropdownClick('work-experience')}
                    >
                        Work Experience
                    </div>
                    <div
                        className="mobile-nav-item"
                        onClick={() => handleDropdownClick('projects')}
                    >
                        Sidequests
                    </div>
                    <div
                        className="mobile-nav-item"
                        onClick={() => handleDropdownClick('hobbies')}
                    >
                        Hobbies
                    </div>
                    <div
                        className="mobile-nav-item"
                        onClick={() => handleDropdownClick('contact')}
                    >
                        Contact
                    </div>
                </div>

                {/* Center - Search Bar */}
                <div className="header-search">
                    <div className="search-container">
                        <div
                            className={`search-bar ${isSearchFocused ? 'focused' : ''}`}
                            onClick={handleSearchClick}
                        >
                            <svg className="search-icon" width="20" height="20" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14 14L11.1 11.1"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="What do you want to know about me?"
                                onFocus={handleSearchClick}
                                onBlur={handleSearchBlur}
                                readOnly
                            />
                        </div>

                        {showDropdown && (
                            <div className="search-dropdown">
                                <div className="dropdown-header">Top Searches</div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleDropdownClick('about-me')}
                                >
                                    <div className="dropdown-icon-container">
                                        <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <div className="dropdown-text">
                                        <span className="dropdown-title">About Me</span>
                                        <span className="dropdown-subtitle">Who am I?</span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleDropdownClick('work-experience')}
                                >
                                    <div className="dropdown-icon-container">
                                        <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
                                            <rect x="11" y="12" width="2" height="2" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="dropdown-text">
                                        <span className="dropdown-title">Work Experience</span>
                                        <span className="dropdown-subtitle">Where I worked before</span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleDropdownClick('projects')}
                                >
                                    <div className="dropdown-icon-container">
                                        <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="dropdown-text">
                                        <span className="dropdown-title">Sidequests</span>
                                        <span className="dropdown-subtitle">Cool side projects I worked on</span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleDropdownClick('hobbies')}
                                >
                                    <div className="dropdown-icon-container">
                                        <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 20h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M12 10c0-1.5 1-3 2.5-4s3.5-1 3.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 7c.5-.5 1.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="dropdown-text">
                                        <span className="dropdown-title">Hobbies</span>
                                        <span className="dropdown-subtitle">Life outside of coding</span>
                                    </div>
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleDropdownClick('contact')}
                                >
                                    <div className="dropdown-icon-container">
                                        <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <div className="dropdown-text">
                                        <span className="dropdown-title">Contact</span>
                                        <span className="dropdown-subtitle">Let's be friends!</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right - Social Media Icons */}
                <div className="header-social">
                    <a
                        href="/Jasmine_Yip_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jasmine-yyy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 9H2V21H6V9Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/jasmineyyip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 19C4 20.5 4 16.5 2 16M22 16V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18C17.4696 22 16.9609 21.7893 16.5858 21.4142C16.2107 21.0391 16 20.5304 16 20V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;