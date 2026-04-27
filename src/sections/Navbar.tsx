import React from 'react';
import '../styles/Navbar.css';
import searchIcon from '../assets/icons/icon-search.svg';
import cartIcon from '../assets/icons/icon-cart.svg';
import userIcon from '../assets/icons/icon-user.svg';
import hamburgerIcon from '../assets/icons/icon-hamburger.svg';
import chevronDownIcon from '../assets/icons/icon-chevron-down.svg';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <div className="navbar-left">
            <button className="navbar-hamburger" aria-label="Menu">
              <img src={hamburgerIcon} alt="" />
            </button>
            <a href="/" className="navbar-logo">SHOP.CO</a>
          </div>

          <ul className="navbar-links">
            <li>
              <a href="#">
                Shop <img className="chevron-icon" src={chevronDownIcon} alt="" />
              </a>
            </li>
            <li><a href="#">On Sale</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Brands</a></li>
          </ul>

          <div className="navbar-search">
            <img className="search-icon" src={searchIcon} alt="Search" />
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className="navbar-actions">
            <button className="mobile-search-button" aria-label="Search">
              <img src={searchIcon} alt="" />
            </button>
            <button aria-label="Cart">
              <img src={cartIcon} alt="" />
            </button>
            <button aria-label="User profile">
              <img src={userIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
