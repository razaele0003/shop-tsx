import React from 'react';
import '../styles/DressStyle.css';

import casualImg from '../assets/images/styles/style-casual.jpg';
import formalImg from '../assets/images/styles/style-formal.jpg';
import partyImg from '../assets/images/styles/style-party.jpg';
import gymImg from '../assets/images/styles/style-gym.jpg';

export const DressStyle: React.FC = () => {
  return (
    <section className="dress-style-section">
      <div className="container">
        <div className="dress-style-wrapper">
          <h2 className="dress-style-title">BROWSE BY DRESS STYLE</h2>
          
          <div className="dress-style-grid">
            <div className="grid-row">
              <div className="style-card card-casual">
                <span className="style-label">Casual</span>
                <img src={casualImg} alt="Casual Style" className="style-image" />
              </div>
              
              <div className="style-card card-formal">
                <span className="style-label">Formal</span>
                <img src={formalImg} alt="Formal Style" className="style-image" />
              </div>
            </div>
            
            <div className="grid-row">
              <div className="style-card card-party">
                <span className="style-label">Party</span>
                <img src={partyImg} alt="Party Style" className="style-image" />
              </div>
              
              <div className="style-card card-gym">
                <span className="style-label">Gym</span>
                <img src={gymImg} alt="Gym Style" className="style-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
