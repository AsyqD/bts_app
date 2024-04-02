// import React from "react";
import '../styles/Services.css';
import img1 from '../images/billboardImg2.png'
import img2 from '../images/billboardImg3.png'
import img3 from '../images/billboardImg4.png'

function Services() {
    const services = [
      {
        id: 1,
        title: "Billboard, Digital/Video/LED",
        serviceImg: img1,
      },
      {
        id: 2,
        title: "Wallscape",
        serviceImg: img2,
      },
      {
        id: 3,
        title: "Poster",
        serviceImg: img2,
      },
    ];
    return (
      <div className="services-container">
        <header className='services-header'>
          <div className="description-box">
              <h2 className="services-title">OUR SERVICES</h2>
              <p className="description-text">Get in front of your customers like never before with Happy Client. Easy-to-use and flexible digital billboard advertising for businesses of all sizes.</p>
            
          </div>
        </header>
        <main>
          <div className="images-container">
            {services.map(service => (
              <div className="image-item">
                <img src={service.serviceImg} alt={`Service ${service.id + 1}`} className="service-image" />
                <p className="image-text">{service.title}</p>
              </div>
            ))}
            {/* <div className="image-item">
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
            </div> */}
          </div>
        </main>
      </div>
    );
  }
  
  export default Services;