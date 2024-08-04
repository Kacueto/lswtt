// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';
import './Navbar.css';
import Logo from '../utils/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const scrollToTop = useScrollToTop();
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="Logo">
                    <img src={Logo} alt="Logo" onClick={scrollToTop}/>
                </Link>
                <p>Spanish Club With The Twins</p>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                
                <Link to="/Courses" className="navbar-item" onClick={toggleMenu}>Courses</Link>
                <Link to="/Podcast" className="navbar-item" onClick={toggleMenu}>Podcast</Link>
                <Link to="/AboutUs" className="navbar-item" onClick={toggleMenu}>About Us</Link>
                <Link to="/ContactUs" className="navbar-item" onClick={toggleMenu}>Contact Us</Link>
                <Link to="/Donations" className="navbar-item" onClick={toggleMenu}>Donations</Link>
            </div>
            <div className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;
