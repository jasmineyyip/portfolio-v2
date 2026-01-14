import React, { useEffect, useState } from 'react';
import './WorkExperience.css';
import { storage } from '../../firebase/config';
import { ref, getDownloadURL } from 'firebase/storage';

const workData = [
    {
        id: 1,
        companyName: 'Tessera Labs',
        jobTitle: 'Software Engineer Intern',
        location: 'San Jose, CA',
        jobType: 'Internship',
        dateRange: 'Jan 2026 – April 2026',
        logoPath: 'company_logos/tessera_labs.jpeg'
    },
    {
        id: 2,
        companyName: 'LinkedIn',
        jobTitle: 'Software Engineer Intern',
        location: 'Mountain View, CA',
        jobType: 'Internship',
        dateRange: 'May 2025 – August 2025',
        logoPath: 'company_logos/linkedin.png'
    },
    {
        id: 3,
        companyName: 'Goldman Sachs',
        jobTitle: 'Emerging Leaders Series - Engineering Scholar',
        location: 'Dallas, TX',
        jobType: 'Apprenticeship',
        dateRange: 'Oct 2024 – Feb 2025',
        logoPath: 'company_logos/goldman_sachs.png'
    },
    {
        id: 4,
        companyName: 'USC Spatial Sciences Institute',
        jobTitle: 'Mobile App Developer',
        location: 'Los Angeles, CA',
        jobType: 'Part-time',
        dateRange: 'Sep 2024 – Apr 2025',
        logoPath: 'company_logos/usc.jpeg'
    },
    {
        id: 5,
        companyName: 'Sara',
        jobTitle: 'Software Engineer Intern',
        location: 'Los Angeles, CA',
        jobType: 'Internship',
        dateRange: 'Jun 2024 – Jul 2024',
        logoPath: 'company_logos/sara.png'
    },
    {
        id: 6,
        companyName: 'Serato',
        jobTitle: 'Software Engineer Intern',
        location: 'Auckland, NZ',
        jobType: 'Internship',
        dateRange: 'Dec 2022 – Feb 2023',
        logoPath: 'company_logos/serato.png'
    },
    {
        id: 7,
        companyName: 'Power Trip',
        jobTitle: 'Software Engineer Intern',
        location: 'Wellington, NZ',
        jobType: 'Part-time',
        dateRange: 'May 2022 – Nov 2022',
        logoPath: 'company_logos/power_trip.png'
    }
];

const WorkExperience = () => {
    const [logoUrls, setLogoUrls] = useState({});

    // Fetch logo URLs from Firebase
    useEffect(() => {
        const loadLogoUrls = async () => {
            const promises = workData.map(async (job) => {
                try {
                    const logoRef = ref(storage, job.logoPath);
                    const url = await getDownloadURL(logoRef);
                    return { id: job.id, url };
                } catch (error) {
                    console.error(`Error loading logo for ${job.companyName}:`, error);
                    return { id: job.id, url: null };
                }
            });

            const results = await Promise.all(promises);
            const urlsMap = {};
            results.forEach(({ id, url }) => {
                urlsMap[id] = url;
            });

            setLogoUrls(urlsMap);
        };

        loadLogoUrls();
    }, []);

    return (
        <div className="work-experience">
            <h2 className="section-title">Work Experience</h2>
            <div className="work-table-header-wrapper">
                <div className="work-table-header">
                    <div className="col col-number">#</div>
                    <div className="col col-title">Title</div>
                    <div className="col col-location">Location</div>
                    <div className="col col-jobtype">Job Type</div>
                    <div className="col col-daterange">Date</div>
                </div>
            </div>
            {workData.map((job, index) => (
                <div key={job.id} className="work-table-row-wrapper">
                    <div className="work-table-row">
                        <div className="col col-number">{index + 1}</div>
                        <div className="col col-title">
                            <img
                                src={logoUrls[job.id]}
                                alt={`${job.companyName} logo`}
                                className="table-logo"
                            />
                            <div className="title-info">
                                <div className="job-title">{job.jobTitle}</div>
                                <div className="company-name">{job.companyName}</div>
                            </div>
                        </div>
                        <div className="col col-location">{job.location}</div>
                        <div className="col col-jobtype">{job.jobType}</div>
                        <div className="col col-daterange">{job.dateRange}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
