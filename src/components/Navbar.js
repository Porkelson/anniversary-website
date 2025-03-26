import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          ❤️
        </Link>
      </div>

      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link 
          to="/memories" 
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Our Memories
        </Link>
        <Link 
          to="/letter" 
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Love Letter
        </Link>
      </div>
    </nav>
  );
} 