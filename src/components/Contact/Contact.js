import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="section-title">Contact</h2>
            <p className="contact-text">
                Thanks for making it all the way down here 👋
                Whether you want to collaborate, chat about life, or just say hi — feel free to reach out!
            </p>
            <div className="contact-links">
                <a href="mailto:jasmineyyip@gmail.com" className="contact-link">jasmineyyip@gmail.com</a>
                <a href="https://www.linkedin.com/in/jasmine-yyy" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                <a href="https://github.com/jasmineyyip" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </div>
        </div>
    );
};

export default Contact;