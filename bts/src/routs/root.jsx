import { Outlet, Link, useLoaderData, } from "react-router-dom";
import React from "react";
// import Header from "../header";
import '../styles/Header.css';
import logo from '../../public/logo.png';
import About from "./about";
import Services from "./services";
import Reviews from "./reviews";
import {Link as ScrollLink} from 'react-scroll';
import Contacts from "./contacts";
export default function Root(){
    return (
      <div className="flex flex-col gap-2">
        <header>{/* style={{position: "fixed", width: "100%"}}*/}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span className="logo-text">Happy <br /> Client</span>
          </div>
          <nav className="nav-links">
            <ul>
              {/* reac-router */}
              {/* <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/contacts">Contacts</Link></li> */}
              {/* react-sroll */}
              <li><ScrollLink to="About" smooth={true} duration={500}>About</ScrollLink></li>
              <li><ScrollLink to="Services" smooth={true} duration={500}>Services</ScrollLink></li>
              <li><ScrollLink to="Reviews" smooth={true} duration={500}>Reviews</ScrollLink></li>
              <li><ScrollLink to="Contacts" smooth={true} duration={500}>Contacts</ScrollLink></li>
            </ul>
          </nav>
          <div className="buttons">
            <button className="sign-up">Sign up</button>
            <button className="sign-in">Sign in</button>
          </div>
        </header>
        <div className="content">
          <div id="About">
              <About/>
          </div>
          <div id="Services">
              <Services/>
          </div>
          <div id="Reviews">
              <Reviews/>
          </div>
          <div id="Contacts">
              <Contacts/>
          </div>
        </div>
      </div>
    );
};