import { Outlet, Link, useLoaderData, useNavigate, Navigate  } from "react-router-dom";
import React from "react";
// import Header from "../header";
import "../styles/Root.css";
import logo from "../images/logo.png";
import About from "./about";
import Services from "./services";
import Reviews from "./reviews";
import { Link as ScrollLink } from "react-scroll";
import Contacts from "./contacts";
import Footer from "./footer";

export default function Root() {
  const navigate = useNavigate ();

  const handleSignIn = () => {
    // Navigate to the SignIn component
    navigate('/signin');
  };

  return (
    <div className="flex flex-col gap-2 white">
      {/* <div style={{position:'fixed', top:0, left:0, width: '100%', height: '10%', zIndex: 100000}}> */}
      <header className="root-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">
            Happy <br /> Client
          </span>
        </div>
        <nav className="nav-links">
          <ul>
            {/* reac-router */}
            {/* <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link o="/contacts">Contacts</Link></li> */}
            {/* react-sroll */}
            <li>
              <ScrollLink to="About" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Services" smooth={true} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Reviews" smooth={true} duration={500}>
                Reviews
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Contacts" smooth={true} duration={500}>
                Contacts
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="sign-up">Sign up</button>
          <button className="sign-in" onClick={handleSignIn}>Sign in</button>
        </div>
      </header>
      {/* </div> */}
      <div className="content">
        <div id="About">
          <About />
        </div>
        <div id="Services">
          <Services />
        </div>
        <div id="Reviews">
          <Reviews />
        </div>
        <div id="Contacts">
          {/* <Contacts/> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
