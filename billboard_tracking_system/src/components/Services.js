import React from "react";
import './Services.css';
import img1 from '../res/billboardImg2.png'
import img2 from '../res/billboardImg3.png'
import img3 from '../res/billboardImg4.png'

function Services() {
    return (
      <div className="services-container">
        <div className="description-box">
            <h2 className="services-title">OUR SERVICES</h2>
            <p className="description-text">Get in front of your customers like never before with Happy Client. Easy-to-use and flexible digital billboard advertising for businesses of all sizes.</p>
          
        </div>
        <div className="images-container">
          <div className="image-item">
            <img src={img1} alt="Service 1" className="service-image" />
            <p className="image-text">Billboard, Digital/Video/LED</p>
          </div>
          <div className="image-item">
            <img src={img2} alt="Service 2" className="service-image" />
            <p className="image-text">Wallscape</p>
          </div>
          <div className="image-item">
            <img src={img3} alt="Service 3" className="service-image" />
            <p className="image-text">Poster</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;