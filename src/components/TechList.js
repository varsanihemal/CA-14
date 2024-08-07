import React from 'react';
import './TechList.css'; 


const TechList = () => (
    <section className="tech-list">
        <h2>Tech List</h2>
        <div className="tech-item">
            <h3>Skills</h3>
            <p>Here are some of the key skills and technologies I've worked with:</p>
            <ul>
                <li>Languages/Frameworks: 
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Ruby on Rails</li>
                        <li>HTML5/CSS3</li>
                        <li>SQL/NoSQL Databases (MySQL, MongoDB, PostgreSQL)</li>
                    </ul>
                </li>
                <li>Tools:
                    <ul>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>Docker</li>
                        <li>Postman</li>
                        <li>JIRA</li>
                        <li>Flask</li>
                        <li>Dash</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="tech-item">
            <h3>Resources</h3>
            <ul>
                <li>
                    <img src="/images/react.png" alt="React Icon" className="tech-icon" />
                    <strong>React Documentation:</strong> Comprehensive guide and API documentation for React. <a href="https://reactjs.org/docs/getting-started.html" className="resource-link">View Resource</a>
                </li>
                <li>
                    <img src="/images/nodejs.png" alt="Node.js Icon" className="tech-icon" />
                    <strong>Node.js Documentation:</strong> Official documentation for Node.js, including API references and tutorials. <a href="https://nodejs.org/en/docs/" className="resource-link">View Resource</a>
                </li>
                <li>
                    <img src="/images/docker.png" alt="Docker Icon" className="tech-icon" />
                    <strong>Docker Documentation:</strong> Learn how to use Docker for containerizing applications. <a href="https://docs.docker.com/" className="resource-link">View Resource</a>
                </li>
                <li>
                    <img src="/images/github.png" alt="GitHub Icon" className="tech-icon" />
                    <strong>GitHub:</strong> Source code management and collaboration platform. <a href="https://github.com/" className="resource-link">View Resource</a>
                </li>
            </ul>
        </div>
    </section>
);

export default TechList;
