import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',            label: 'Memories'     },
  { to: '/journal',     label: 'Journal'      },
  { to: '/bucket-list', label: 'Bucket List'  },
  { to: '/love-letter', label: 'Love Letter'  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="navbar-brand">
        <Link to="/" className="logo" aria-label="Home">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="17.5" stroke="currentColor" strokeWidth="1.5" />
            <text x="19" y="25" textAnchor="middle" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="700" fill="currentColor">A</text>
          </svg>
        </Link>
      </div>

      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
