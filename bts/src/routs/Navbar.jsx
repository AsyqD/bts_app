import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="happy-client">
          <img src="/images/logo.png" alt="logo" className="logo-img" />
        </div>
      <ul className="nav-links">
        <li>
          <div className="profile">
            <Link className="link"  to="/">Profile</Link>
          </div>
        </li>
        <li>
          <div className="settings">
            <Link className="link" to="/">Settings</Link>
          </div>
        </li>
        <li>
          <div className="order">
            <Link className="link"  to="/">Order</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
