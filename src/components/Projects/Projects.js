import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { storage } from '../../firebase/config';
import { ref, getDownloadURL } from "firebase/storage";

const projectsData = [
    {
        id: 1,
        title: 'Sequence',
        website: 'https://www.sequencestories.com/',
        date: 'Feb 2024 - May 2024',
        description: 'Full-stack whiteboard tool built with React.js and Firebase, allowing choose-your-own-adventure story writers to map out branching story lines and publish stories for readers to discover.',
        thumbnailPath: 'demos/thumbnails/sequence.png',
        videoPath: 'demos/videos/sequence.mp4',
        colors: {
            dark: '#010a9e',
            light: '#0040c9'
        },
        disabled: 'false',
    },
    {
        id: 2,
        title: 'Mutual Fund Calculator',
        website: 'https://github.com/carloshernandez201/MutualFundInvestmentPredictor',
        date: 'Jan 2025 - June 2025',
        description: 'Developed backend services and RESTful APIs for a Mutual Fund Calculator, integrating Newton Analytics and FRED APIs to fetch beta values, historical S&P 500 returns, and risk-free rates.',
        thumbnailPath: 'demos/thumbnails/mutualfund.png',
        videoPath: 'demos/videos/sequence.mp4',
        colors: {
            dark: '#353535',
            light: '#535353'
        },
        disabled: 'true',
    },
    {
        id: 3,
        title: 'USC Climbing Club Website',
        website: 'https://www.uscclimbing.org/',
        date: 'Jan 2025 - June 2025',
        description: 'Designed and developed the USC Climbing Club website from scratch using Figma, React.js, and Firebase.',
        thumbnailPath: 'demos/thumbnails/usc_climbing.png',
        videoPath: 'demos/videos/usc_climbing.mov',
        colors: {
            dark: '#b88946',
            light: '#c7a16b'
        },
        disabled: 'false',
    },
    {
        id: 4,
        title: 'Cookie AI',
        website: 'https://cookie-ai-ioy6.onrender.com/',
        date: 'Jan 2025 - June 2025',
        description: 'Full-stack web app built with MongoDB, Express, React, Node.js, and OpenAI API that breaks down lengthy assignment instructions into manageable and exportable subtasks',
        thumbnailPath: 'demos/thumbnails/cookieai.png',
        videoPath: 'demos/videos/sequence.mp4',
        colors: {
            dark: '#073e8c',
            light: '#0b65e3'
        },
        disabled: 'true',
    }
];

const Projects = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [playingVideos, setPlayingVideos] = useState({});
    const [mediaUrls, setMediaUrls] = useState({});
    const [loadedThumbnails, setLoadedThumbnails] = useState({});
    const [preloadedVideos, setPreloadedVideos] = useState({});
    const videoRefs = useRef({});
    const preloadVideoRefs = useRef({});

    const getMediaUrl = async (path) => {
        try {
            const mediaRef = ref(storage, path);
            const url = await getDownloadURL(mediaRef);
            return url;
        } catch (error) {
            console.error('Error getting media URL:', error);
            return null;
        }
    };

    useEffect(() => {
        const loadAllMediaUrls = async () => {
            const urlPromises = [];

            projectsData.forEach(project => {
                urlPromises.push(
                    getMediaUrl(project.thumbnailPath).then(url => ({
                        id: project.id,
                        type: 'thumbnail',
                        url
                    }))
                );
                urlPromises.push(
                    getMediaUrl(project.videoPath).then(url => ({
                        id: project.id,
                        type: 'video',
                        url
                    }))
                );
            });

            try {
                const results = await Promise.all(urlPromises);
                const urls = {};
                results.forEach(result => {
                    if (!urls[result.id]) {
                        urls[result.id] = {};
                    }
                    urls[result.id][result.type] = result.url;
                });
                setMediaUrls(urls);
            } catch (error) {
                console.error('Error loading media URLs:', error);
            }
        };

        loadAllMediaUrls();
    }, []);

    const handleThumbnailLoad = (projectId) => {
        setLoadedThumbnails(prev => ({ ...prev, [projectId]: true }));
    };

    const handleCardEnter = (projectId) => {
        setHoveredCard(projectId);
        
        // Preload video on hover (if not disabled and not already preloaded)
        const project = projectsData.find(p => p.id === projectId);
        if (project && project.disabled !== 'true' && !preloadedVideos[projectId] && mediaUrls[projectId] && mediaUrls[projectId].video) {
            const video = preloadVideoRefs.current[projectId];
            if (video) {
                video.src = mediaUrls[projectId].video;
                video.load();
                setPreloadedVideos(prev => ({ ...prev, [projectId]: true }));
            }
        }
    };

    const handleCardLeave = (projectId) => {
        setHoveredCard(null);
    };

    const handlePlayPauseClick = (projectId, event) => {
        event.stopPropagation();
        
        const project = projectsData.find(p => p.id === projectId);
        if (project && project.disabled === 'true') {
            return;
        }
        
        const isPlaying = playingVideos[projectId];

        if (isPlaying) {
            const video = videoRefs.current[projectId];
            if (video) {
                video.pause();
            }
            setPlayingVideos(prev => ({ ...prev, [projectId]: false }));
        } else {
            setPlayingVideos(prev => ({ ...prev, [projectId]: true }));

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
        <div className="projects">
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
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-cta"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>

                            <div className="project-media">
                                {/* Skeleton loader */}
                                {!loadedThumbnails[project.id] && !playingVideos[project.id] && (
                                    <div className="project-media-skeleton" />
                                )}
                                
                                {/* Hidden preload video - loads on hover */}
                                <video
                                    ref={el => { preloadVideoRefs.current[project.id] = el; }}
                                    preload="auto"
                                    muted
                                    style={{ display: 'none' }}
                                />

                                {playingVideos[project.id] ? (
                                    <video
                                        ref={el => {
                                            videoRefs.current[project.id] = el;
                                            if (el && playingVideos[project.id]) {
                                                el.play().catch(error => {
                                                    console.error('Error auto-playing video:', error);
                                                });
                                            }
                                        }}
                                        className="project-video"
                                        muted
                                        loop
                                        src={mediaUrls[project.id]?.video}
                                    />
                                ) : (
                                    <img
                                        src={mediaUrls[project.id]?.thumbnail}
                                        alt={`${project.title} thumbnail`}
                                        className={`project-thumbnail ${loadedThumbnails[project.id] ? 'loaded' : 'loading'}`}
                                        onLoad={() => handleThumbnailLoad(project.id)}
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
                                    style={{
                                        ...(project.disabled === 'true' && {
                                            cursor: 'not-allowed',
                                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
                                        })
                                    }}
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