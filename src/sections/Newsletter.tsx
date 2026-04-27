import React from 'react';
import mailIcon from '../assets/icons/icon-mail.svg';
import '../styles/Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <h2 className="newsletter-title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="newsletter-form">
            <div className="input-wrapper">
              <img src={mailIcon} alt="Email" className="mail-icon" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input" 
                aria-label="Email address"
              />
            </div>
            <button className="newsletter-btn">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
