import React, { useState } from 'react';
import '../styles/AnnouncementBar.css';
import closeIcon from '../assets/icons/icon-close.svg';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="container announcement-bar-content">
        <p className="announcement-bar-text">
          Sign up and get 20% off to your first order.{' '}
          <a href="#" className="announcement-bar-link">
            Sign Up Now
          </a>
        </p>
        <button
          type="button"
          className="announcement-bar-close"
          aria-label="Close announcement"
          onClick={() => setIsVisible(false)}
        >
          <img src={closeIcon} alt="" width="20" height="20" />
        </button>
      </div>
    </div>
  );
};
