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
                </div>
            </div>
        </div>
    );
};

export default Profile;