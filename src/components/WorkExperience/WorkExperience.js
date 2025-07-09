import React from 'react';
import './WorkExperience.css';
import linkedinLogo from '../../assets/company/linkedin_logo.png';
import uscLogo from '../../assets/company/usc_logo.jpeg';
import goldmanLogo from '../../assets/company/goldman_sachs_logo.png';
import seratoLogo from '../../assets/company/serato_logo.png';
import saraLogo from '../../assets/company/sara_logo.png';

const WorkExperience = () => {
    const workData = [
        {
            id: 1,
            companyLogo: linkedinLogo,
            companyName: 'LinkedIn',
            jobTitle: 'Software Engineer Intern',
            location: 'Mountain View, CA',
            dateRange: 'May 2025 – August 2025',
            description: []
        },
        {
            id: 2,
            companyLogo: goldmanLogo,
            companyName: 'Goldman Sachs',
            jobTitle: 'Emerging Leader Series - Engineering Scholar',
            location: 'Dallas, TX',
            dateRange: 'October 2024 – February 2025',
            description: []
        },
        {
            id: 3,
            companyLogo: uscLogo,
            companyName: 'USC Spatial Sciences Institute',
            jobTitle: 'Mobile App Developer & Researcher',
            location: 'Los Angeles, CA',
            dateRange: 'September 2024 – April 2025',
            description: []
        },
        {
            id: 4,
            companyLogo: saraLogo,
            companyName: 'Sara',
            jobTitle: 'Software Engineer Intern',
            location: 'Los Angeles, CA',
            dateRange: 'June 2024 – July 2024',
            description: []
        },
        {
            id: 5,
            companyLogo: seratoLogo,
            companyName: 'Serato',
            jobTitle: 'Software Engineer Intern',
            location: 'Auckland, NZ',
            dateRange: 'December 2022 – February 2023',
            description: []
        }
    ];

    return (
        <div className="work-experience">
            <h2 className="section-title">Work Experience</h2>
            <div className="work-list">
                {workData.map(job => (
                    <div key={job.id} className="work-item">
                        <div className="work-image">
                            <img
                                src={job.companyLogo}
                                alt={`${job.companyName} logo`}
                                className="company-logo"
                            />
                        </div>
                        <div className="work-content">
                            <div className="work-header">
                                <div className="work-main-info">
                                    <h3 className="company-name">{job.companyName}</h3>
                                    <p className="job-title">{job.jobTitle}</p>
                                    <p className="job-location">{job.location}</p>
                                </div>
                                <div className="work-meta">
                                    <span className="date-range">{job.dateRange}</span>
                                </div>
                            </div>
                            {/* <div className="work-description">
                                {job.description.map((point, index) => (
                                    <p key={index} className="description-point">
                                        {point}
                                    </p>
                                ))}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;