import React from "react";
import "../styles/Footer.css";
import instImg from "../images/instagram.png";
import twitterImg from "../images/twitter.png";
import facebookImg from "../images/facebook.png";
import whatsappImg from "../images/whatsapp.png";

export default function Footer() {
  return (
    <footer>
      <header className="footer-header">
        <div className="miniheader-footer">
          <h1>Contact us</h1>
        </div>
      </header>
      <div className="footer-container">
        <div className="talk-box">
          <p>
            Every project starts with a chat. Tell us about your idea and we'll
            help you bring it to life.
          </p>
          <button>Tell us about your project</button>
        </div>
        <div className="contact-box">
          <div className="contact-info">
            <p>
              <span>Email:</span> happyclient@gmail.com
            </p>
            <p>
              <span>Phone:</span> +7-707-707-7007
            </p>
            <p>
              <span>Address:</span> Almaty region, Karasai district. 040900,
              city of Kaskelen, st. Abylai Khan 1/1
            </p>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img src={twitterImg} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100043588397773" target="_blank">
                  <img src={facebookImg} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yorky_nc/" target="_blank">
                  <img src={instImg} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=%2B77471533681&text&type=phone_number&app_absent=0" target="_blank">
                  <img src={whatsappImg} alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="div-20">
        <p>© 2024 Happy Client. All rights reserved</p>
      </div>
    </footer>
  );
}
