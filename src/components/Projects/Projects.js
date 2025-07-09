import React, { useState, useRef } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

// video and thumbnail imports
import sequenceThumbnail from '../../assets/demos/thumbnails/sequence.png';
import sequenceVideo from '../../assets/demos/videos/sequence.mp4';
import uscclimbingThumbnail from '../../assets/demos/thumbnails/usc_climbing.png';
// import uscclimbingVideo from '../../assets/demos/thumbnails/usc_climbing.png';
import mutualfundThumbnail from '../../assets/demos/thumbnails/mutualfund.png';
import cookieaiThumbnail from '../../assets/demos/thumbnails/cookieai.png'

const Projects = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [playingVideos, setPlayingVideos] = useState({});
    const videoRefs = useRef({});

    const projectsData = [
        {
            id: 1,
            title: 'Sequence',
            website: 'https://www.sequencestories.com/',
            date: 'Feb 2024 - May 2024',
            description: 'Full-stack whiteboard tool built with React.js and Firebase, allowing choose-your-own-adventure story writers to map out branching story lines and publish stories for readers to discover.',
            videoThumbnail: sequenceThumbnail,
            demoVideo: sequenceVideo,
            colors: {
                dark: '#010a9e',
                light: '#0040c9'
            }
        },
        {
            id: 2,
            title: 'Mutual Fund Calculator',
            website: 'https://github.com/carloshernandez201/MutualFundInvestmentPredictor',
            date: 'Jan 2025 - June 2025',
            description: 'Developed backend services and RESTful APIs for a Mutual Fund Calculator, integrating Newton Analytics and FRED APIs to fetch beta values, historical S&P 500 returns, and risk-free rates.',
            videoThumbnail: mutualfundThumbnail,
            demoVideo: sequenceVideo,
            colors: {
                dark: '#353535',
                light: '#535353'
            }
        },
        {
            id: 3,
            title: 'USC Climbing Club Website',
            website: 'https://www.uscclimbing.org/',
            date: 'Jan 2025 - June 2025',
            description: 'Designed and developed the USC Climbing Club website from scratch using Figma, React.js, and Firebase.',
            videoThumbnail: uscclimbingThumbnail,
            demoVideo: sequenceVideo,
            colors: {
                dark: '#b88946',
                light: '#c7a16b'
            }
        },
        {
            id: 4,
            title: 'Cookie AI',
            website: 'https://cookie-ai-ioy6.onrender.com/',
            date: 'Jan 2025 - June 2025',
            description: 'Full-stack web app built with MongoDB, Express, React, Node.js, and OpenAI API that breaks down lengthy assignment instructions into manageable and exportable subtasks',
            videoThumbnail: cookieaiThumbnail,
            demoVideo: sequenceVideo,
            colors: {
                dark: '#073e8c',
                light: '#0b65e3'
            }
        }
    ];

    const handleCardEnter = (projectId) => {
        setHoveredCard(projectId);
    };

    const handleCardLeave = (projectId) => {
        setHoveredCard(null);
    };

    const handlePlayPauseClick = (projectId, event) => {
        event.stopPropagation();
        const isPlaying = playingVideos[projectId];

        if (isPlaying) {
            // Pause the video
            const video = videoRefs.current[projectId];
            if (video) {
                video.pause();
            }
            setPlayingVideos(prev => ({ ...prev, [projectId]: false }));
        } else {
            // Start playing - first set the state, then play when video is ready
            setPlayingVideos(prev => ({ ...prev, [projectId]: true }));

            // Use setTimeout to ensure video element is rendered before trying to play
            setTimeout(() => {
                const video = videoRefs.current[projectId];
                if (video) {
                    video.play().catch(error => {
                        console.error('Error playing video:', error);
                    });
                }
            }, 50);
        }
    };

    return (
        <div className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div
                        key={project.id}
                        className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
                        style={{
                            background: `linear-gradient(to top, ${project.colors.dark} 0%, ${project.colors.light} 100%)`
                        }}
                        onMouseEnter={() => handleCardEnter(project.id)}
                        onMouseLeave={() => handleCardLeave(project.id)}
                    >
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span className="project-date">{project.date}</span>
                                    <span className="project-separator">•</span>
                                    <a href={project.website} target='_blank' className="project-cta">Visit Website</a>
                                </div>
                            </div>

                            <div className="project-media">
                                {playingVideos[project.id] ? (
                                    <video
                                        ref={el => {
                                            videoRefs.current[project.id] = el;
                                            // Auto-play when video element is first created
                                            if (el && playingVideos[project.id]) {
                                                el.play().catch(error => {
                                                    console.error('Error auto-playing video:', error);
                                                });
                                            }
                                        }}
                                        className="project-video"
                                        muted
                                        loop
                                    >
                                        <source src={project.demoVideo} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={project.videoThumbnail}
                                        alt={`${project.title} thumbnail`}
                                        className="project-thumbnail"
                                    />
                                )}
                            </div>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="play-pause-section">
                                <button
                                    className="play-pause-button"
                                    onClick={(e) => handlePlayPauseClick(project.id, e)}
                                >
                                    {playingVideos[project.id] ? (
                                        <FontAwesomeIcon
                                            icon={faPause}
                                            size="xl"
                                            color={project.colors.dark}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faPlay}
                                            size="xl"
                                            color={project.colors.dark}
                                            style={{ paddingLeft: '2px' }}
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;