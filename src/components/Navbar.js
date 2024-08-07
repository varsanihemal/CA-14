// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/tech-list">Tech List</Link></li>
                <li><Link to="/developer-setup">Developer Setup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
