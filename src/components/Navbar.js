import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Portfolio</div>
        
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "bar active" : "bar"}></span>
          <span className={isOpen ? "bar active" : "bar"}></span>
          <span className={isOpen ? "bar active" : "bar"}></span>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="education" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="achievements" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Achievements
            </Link>
          </li>
          <li className="nav-item">
            <Link to="certifications" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
