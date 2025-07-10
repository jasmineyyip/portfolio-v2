import React from 'react';
import profilePic from '../../assets/profile-picture.png';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-section">
            <div className="profile-content">
                <div className="profile-image">
                    <img
                        src={profilePic}
                        alt="Jasmine Yip"
                        className="profile-photo"
                    />
                </div>
                <div className="profile-text">
                    <p className="profile-label">Profile</p>
                    <h1 className="profile-name">Jasmine Yip</h1>
                    <div className="profile-stats">
                        <span className="stat-item">20 Projects</span>
                        <span className="stat-separator">•</span>
                        <span className="stat-item">4 Internships</span>
                        <span className="stat-separator">•</span>
                        <span className="stat-item">5 Hackathon Wins</span>
                    </div>
                    {/* <p className="profile-subtext">Hi! I’m Jasmine, a rising junior studying Computer Science at the University of Southern California (USC) passionate about building products at the intersection of technology, creativity, and social impact. This summer, I am interning at LinkedIn as a software engineer. Previously, I’ve developed apps and softwares at a speech therapy startup helping children with speech disorders and at a DJ tech company empowering music creators. I love exploring how engineering can empower human connection and self-expression. */}
                    {/* </p> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;