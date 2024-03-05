// About.js
import image from '../../public/billboardImg_1.jpeg';
import React from 'react';
import '../styles/About.css'; // Importing CSS file

function About() {
  return (
    <div className="about-container">
      <div className="left-content">
        <h2 className="offer-heading">WE OFFER</h2>
        <p className="offer-description">
          Impactful billboard advertising with a <br />
          truly national or targeted local <br />
          coverage, and with maximum visibility, <br />
          in key arterial roads and high streets
        </p>
        <div className="button-conteiner">
            <button className="order-button">Order</button>
        </div>
        
      </div>
      <div className="right-content">
        <img src={image} alt="Billboard" className="billboard-img" />
      </div>
    </div>
  );
}

export default About;
