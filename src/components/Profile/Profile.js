import { useState, useRef } from 'react';
import profilePic from '../../assets/profile.png';
import ColorThief from 'colorthief';
import './Profile.css';

const Profile = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [gradientStyle, setGradientStyle] = useState({});
    const imgRef = useRef(null);
    const profileSectionRef = useRef(null);

    const extractColorAndSetGradient = () => {
        if (imgRef.current) {
            try {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(imgRef.current);
                const [r, g, b] = dominantColor;

                const gradient = `linear-gradient(to top,
                    rgb(${Math.floor(r * 0.15)}, ${Math.floor(g * 0.15)}, ${Math.floor(b * 0.15)}) 0%,
                    rgb(${Math.floor(r * 0.5)}, ${Math.floor(g * 0.5)}, ${Math.floor(b * 0.5)}) 100%)`;

                if (profileSectionRef.current) {
                    profileSectionRef.current.style.background = gradient;
                }
                setGradientStyle({ background: gradient });
            } catch (error) {
                console.log('Color extraction failed, using default gradient');
            }
        }
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
        extractColorAndSetGradient();
    };

    return (
        <div className="profile-section" ref={profileSectionRef} style={gradientStyle}>
            <div className="profile-content">
                <div className="profile-image">
                    {!imageLoaded && <div className="profile-skeleton" />}
                    <img
                        ref={imgRef}
                        src={profilePic}
                        alt="Jasmine Yip"
                        className={`profile-photo ${imageLoaded ? 'loaded' : 'loading'}`}
                        onLoad={handleImageLoad}
                        crossOrigin="anonymous"
                    />
                </div>
                <div className="profile-text">
                    <p className="profile-label">Profile</p>
                    <h1 className="profile-name">Jasmine Yip</h1>
                    <div className="profile-stats">
                        <span className="stat-item"><span className='stat-number'>20</span> Projects</span>
                        <span className="stat-separator">•</span>
                        <span className="stat-item"><span className='stat-number'>5</span> Internships</span>
                        <span className="stat-separator">•</span>
                        <span className="stat-item"><span className='stat-number'>5</span> Hackathon Wins</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;