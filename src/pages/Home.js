// src/pages/Home.js
import React from 'react';
import Info from '../components/HemalInfo';

const Home = () => {
    return (
        <section className="info-section">
        <h1>Hemal Varsani</h1>
        <p>Welcome to my portfolio website! Here you'll find a showcase of my work and skills that I've developed throughout my career and education.</p>
        
        <div className="bio">
            <h2>About Me</h2>
            <p>
                I am a passionate web developer with a strong foundation in front-end and back-end technologies. My journey began with a fascination for technology and has since evolved into a career dedicated to creating dynamic and user-friendly web applications.
            </p>
            <p>
                With a background in Full Stack Web Development and practical experience in various projects, I enjoy tackling challenges and learning new technologies. I’m always eager to improve my skills and contribute to exciting projects.
            </p>
        </div>

        <div className="education">
            <h2>Education</h2>
            <p>
                I am currently pursuing a course at Red River College, where I focusing on web technologies. During my studies, I have learnt a lot which gave me to work on various projects that enhanced my programming skills and provided a solid understanding of web development principles.
            </p>
        </div>

        <div className="contact">
            <h2>Contact Me</h2>
            <p>
                If you have any questions or would like to collaborate on a project, feel free to reach out to me. You can email me at <a href="mailto:hemalvarsani123@gmail.com">hemalvarsani123@gmail.com</a> or connect with me on LinkedIn.
            </p>
        </div>

        <div className="call-to-action">
            <h2>Explore My Work</h2>
            <p>
                Take a look at the projects and technologies I've worked with in the sections below. I am always excited to discuss new opportunities and share my experiences.
            </p>
        </div>
    </section>
    );
};

export default Home;
