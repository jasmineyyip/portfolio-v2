import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 className="section-title">About</h2>
            <p className="about-me-text">
                Hi! I'm Jasmine, a junior at USC studying Computer Science. I love building systems that actually work at scale- thinking about how data flows, how services talk to each other, and how everything holds up under real-world pressure.
            </p>
            <br></br>
            <p className="about-me-text">
                Currently, I'm interning at Tessera Labs building enterprise AI automation software. I'm also doing research with USC and Harvard benchmarking and fine-tuning speech AI models. This past summer I was at LinkedIn working on their company pages, building out verification features that involved wrangling Java microservices across multiple codebases. Before that I worked at a couple startups doing speech therapy app and DJ tech, which taught me a lot about wearing multiple hats and owning features end to end.
            </p>    
            <br></br>
            <p className="about-me-text">
                I'm interested in problems at the intersection of AI and infrastructure. My ideal work environments are ones where I'm challenged technically and when what I'm building actually matters to real users.
            </p>
            <br></br>
            <p className="about-me-text">
                Outside of work, I enjoy rock climbing, hiking, camping, crocheting, and trying new coffee spots.
            </p>
        </div>
    );
};

export default AboutMe;