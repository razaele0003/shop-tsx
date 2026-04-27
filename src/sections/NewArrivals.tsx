import React from 'react';
import { ProductCard } from '../components/ProductCard';
import type { ProductProps } from '../components/ProductCard';
import '../styles/NewArrivals.css';

import tapeTshirt from '../assets/images/products/product-tape-tshirt.jpg';
import skinnyJeans from '../assets/images/products/product-skinny-jeans.jpg';
import checkeredShirt from '../assets/images/products/product-checkered-shirt.jpg';
import stripedTshirt from '../assets/images/products/product-striped-tshirt.jpg';

const NEW_ARRIVALS_DATA: ProductProps[] = [
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    rating: 4.5,
    price: 120,
    imageUrl: tapeTshirt,
  },
  {
    id: '2',
    name: 'Skinny Fit Jeans',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
    imageUrl: skinnyJeans,
  },
  {
    id: '3',
    name: 'Checkered Shirt',
    rating: 4.5,
    price: 180,
    imageUrl: checkeredShirt,
  },
  {
    id: '4',
    name: 'Sleeve Striped T-shirt',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
    imageUrl: stripedTshirt,
  },
];

export const NewArrivals: React.FC = () => {
  return (
    <section className="new-arrivals-section">
      <div className="container">
        <h2 className="section-title">NEW ARRIVALS</h2>
        
        <div className="product-grid">
          {NEW_ARRIVALS_DATA.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="btn-view-all">View All</button>
        </div>
        
        <div className="section-divider"></div>
      </div>
    </section>
  );
};
