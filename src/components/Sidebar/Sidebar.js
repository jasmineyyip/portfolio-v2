// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection, onSectionClick }) => {
    const navigationItems = [
        {
            id: 'about-me',
            title: 'About Me',
            subtitle: 'Who am I?',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            )
        },
        {
            id: 'work-experience',
            title: 'Work Experience',
            subtitle: 'Where I worked before',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="11" y="12" width="2" height="2" fill="currentColor" />
                </svg>
            )
        },
        {
            id: 'projects',
            title: 'Sidequests',
            subtitle: 'Cool side projects I worked on',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'hobbies',
            title: 'Hobbies',
            subtitle: 'Life outside of coding',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 20h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 10c0-1.5 1-3 2.5-4s3.5-1 3.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7c.5-.5 1.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 'contact',
            title: 'Contact',
            subtitle: "Let's be friends!",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            )
        }
    ];

    return (
        <div className="sidebar">
            {/* Navigation Header */}
            <div className="sidebar-header">
                <div className="sidebar-title">Navigation</div>
            </div>

            {/* Navigation Items */}
            <div className="sidebar-nav">
                {navigationItems.map((item) => (
                    <div
                        key={item.id}
                        className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => onSectionClick(item.id)}
                    >
                        <div className="sidebar-icon-container">
                            {item.icon}
                        </div>
                        <div className="sidebar-text">
                            <span className="sidebar-item-title">{item.title}</span>
                            <span className="sidebar-item-subtitle">{item.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer/Additional Actions */}
            <div className="sidebar-footer">
                <div className="sidebar-divider"></div>
                <div className="sidebar-footer-text">
                    <span>Quick Links</span>
                </div>
                <a
                    href="/Jasmine_Yip_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-action-item"
                >
                    <div className="sidebar-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="sidebar-text">
                        <span className="sidebar-item-title">Download Resume</span>
                        <span className="sidebar-item-subtitle">Get my latest CV</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;