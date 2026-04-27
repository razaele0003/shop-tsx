import React from 'react';
import '../styles/Hero.css';

import heroModel from '../assets/images/hero-model.jpg';
import sparkleLarge from '../assets/icons/icon-sparkle-large.svg';
import sparkleSmall from '../assets/icons/icon-sparkle-small.svg';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero-subtext">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="hero-button">Shop Now</button>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">International Brands</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2,000+</span>
              <span className="stat-label">High-Quality Products</span>
            </div>
            <div className="stat-divider mobile-hide"></div>
            <div className="stat-item stat-item-third">
              <span className="stat-number">30,000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img src={sparkleLarge} alt="" className="sparkle-large" />
          <img src={sparkleSmall} alt="" className="sparkle-small" />
          <img src={heroModel} alt="Fashion models" className="hero-model" />
        </div>
      </div>
    </section>
  );
};
