import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Portfolio</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} className="nav-link">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="education" smooth={true} duration={500} className="nav-link">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="achievements" smooth={true} duration={500} className="nav-link">
              Achievements
            </Link>
          </li>
          <li className="nav-item">
            <Link to="certifications" smooth={true} duration={500} className="nav-link">
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
