// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <button className="navbar-toggle" onClick={handleToggleMenu}>
        ☰ {/* Este é o ícone de "hambúrguer" */}
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
