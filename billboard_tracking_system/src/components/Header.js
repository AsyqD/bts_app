// Header.js
import './Header.css';
import logo from '../res/logo.png';
import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Happy <br /> Client</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="sign-up">Sign up</button>
        <button className="sign-in">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
