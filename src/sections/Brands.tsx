import React from 'react';
import '../styles/Brands.css';

import logoVersace from '../assets/logos/logo-versace.svg';
import logoZara from '../assets/logos/logo-zara.svg';
import logoGucci from '../assets/logos/logo-gucci.svg';
import logoPrada from '../assets/logos/logo-prada.svg';
import logoCalvinKlein from '../assets/logos/logo-calvin-klein.svg';

export const Brands: React.FC = () => {
  return (
    <section className="brands-section">
      <div className="container brands-container">
        <img src={logoVersace} alt="Versace" className="brand-logo brand-versace" />
        <img src={logoZara} alt="Zara" className="brand-logo brand-zara" />
        <img src={logoGucci} alt="Gucci" className="brand-logo brand-gucci" />
        <img src={logoPrada} alt="Prada" className="brand-logo brand-prada" />
        <img src={logoCalvinKlein} alt="Calvin Klein" className="brand-logo brand-calvin-klein" />
      </div>
    </section>
  );
};
