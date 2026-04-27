import React from 'react';
import iconTwitter from '../assets/icons/icon-twitter.svg';
import iconFacebook from '../assets/icons/icon-facebook.svg';
import iconInstagram from '../assets/icons/icon-instagram.svg';
import iconGithub from '../assets/icons/icon-github.svg';
import badgeVisa from '../assets/badges/badge-visa.svg';
import badgeMastercard from '../assets/badges/badge-mastercard.svg';
import badgeAmex from '../assets/badges/badge-amex.svg';
import badgePaypal from '../assets/badges/badge-paypal.svg';
import badgeGpay from '../assets/badges/badge-gpay.svg';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <h2 className="footer-logo">SHOP.CO</h2>
            <p className="footer-desc">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon">
                <img src={iconTwitter} alt="Twitter" />
              </a>
              <a href="#" className="social-icon social-icon--dark">
                <img src={iconFacebook} alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src={iconInstagram} alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src={iconGithub} alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h3>COMPANY</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>HELP</h3>
              <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>FAQ</h3>
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Manage Deliveries</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>RESOURCES</h3>
              <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-badges">
            <img src={badgeVisa} alt="Visa" />
            <img src={badgeMastercard} alt="Mastercard" />
            <img src={badgePaypal} alt="PayPal" />
            <img src={badgeAmex} alt="Amex" />
            <img src={badgeGpay} alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
