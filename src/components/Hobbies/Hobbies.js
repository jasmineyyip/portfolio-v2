import React, { useState, useRef, useEffect } from 'react';
import './Hobbies.css';
import { storage } from '../../firebase/config';
import { ref, getDownloadURL } from 'firebase/storage';

const Hobbies = () => {
    const [showControls, setShowControls] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [imageUrls, setImageUrls] = useState({});
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    const hobbies = [
        {
            id: 1,
            title: "Rock Climbing",
            description: "Las Vegas trip - bouldering by day, rolling dice by night",
            imagePath: "hobbies/climbing.png"
        },
        {
            id: 2,
            title: "Traveling",
            description: "Caught the prettiest sunset from Xiangshan in Taipei",
            imagePath: "hobbies/traveling.png"
        },
        {
            id: 3,
            title: "Hiking",
            description: "Hiking at the Hollywood Sign Trail",
            imagePath: "hobbies/hiking.png"
        },
        {
            id: 4,
            title: "Running",
            description: "Ran my first half marathon in La Jolla, San Diego",
            imagePath: "hobbies/running.png"
        },
        {
            id: 5,
            title: "Entrepreneurship",
            description: "Demoing Sequence at LavaLab Demo Night",
            imagePath: "hobbies/entrepreneurship.png"
        },
        {
            id: 6,
            title: "Drawing",
            description: "Experimenting with blind contour drawing",
            imagePath: "hobbies/drawing.png"
        },
        {
            id: 7,
            title: "Music & Concerts",
            description: "My friend and I at Billie Eilish's concert",
            imagePath: "hobbies/music.png"
        }
    ];

    // Function to get download URL from Firebase Storage
    const getImageUrl = async (path) => {
        try {
            const imageRef = ref(storage, path);
            const url = await getDownloadURL(imageRef);
            return url;
        } catch (error) {
            console.error('Error getting image URL:', error);
            return null;
        }
    };

    // Load all image URLs on component mount
    useEffect(() => {
        const loadAllImageUrls = async () => {
            const urlPromises = hobbies.map(async (hobby) => {
                const url = await getImageUrl(hobby.imagePath);
                return {
                    id: hobby.id,
                    url
                };
            });

            try {
                const results = await Promise.all(urlPromises);

                // Organize URLs by hobby ID
                const urls = {};
                results.forEach(result => {
                    urls[result.id] = result.url;
                });

                setImageUrls(urls);
                setLoading(false);
            } catch (error) {
                console.error('Error loading image URLs:', error);
                setLoading(false);
            }
        };

        loadAllImageUrls();
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 210; // card width + gap
            const newScrollPosition = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setScrollPosition(container.scrollLeft);
            setMaxScroll(container.scrollWidth - container.clientWidth);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Set initial max scroll
            setMaxScroll(container.scrollWidth - container.clientWidth);

            // Add scroll listener
            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    if (loading) {
        return (
            <div className="hobbies-section">
                <div className="hobbies-header">
                    <h2 className="section-title">Tracks of My Life</h2>
                </div>
                <div className="loading-container">
                    <p>Loading hobbies...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="hobbies">
            <div className="hobbies-header">
                <h2 className="section-title">Tracks of My Life</h2>
            </div>

            <div
                className="hobbies-container"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
            >
                <div
                    className="hobbies-scroll-container"
                    ref={scrollContainerRef}
                >
                    {hobbies.map((hobby) => (
                        <div key={hobby.id} className="hobby-card">
                            <div className="hobby-card-image">
                                <img
                                    src={imageUrls[hobby.id]}
                                    alt={hobby.title}
                                    className="hobby-image"
                                />
                            </div>
                            <div className="hobby-card-content">
                                <h3 className="hobby-title">{hobby.title}</h3>
                                <p className="hobby-description">{hobby.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    className={`nav-button nav-button-left ${showControls ? 'visible' : ''}`}
                    onClick={() => scroll('left')}
                    aria-label="Previous hobbies"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button
                    className={`nav-button nav-button-right ${showControls ? 'visible' : ''}`}
                    onClick={() => scroll('right')}
                    aria-label="Next hobbies"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Fade overlays */}
                <div className={`fade-overlay fade-left ${scrollPosition > 10 ? 'visible' : ''}`}></div>
                <div className={`fade-overlay fade-right ${scrollPosition < maxScroll - 10 ? 'visible' : ''}`}></div>
            </div>
        </div>
    );
};

export default Hobbies;