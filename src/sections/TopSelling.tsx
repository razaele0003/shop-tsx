import React from 'react';
import { ProductCard } from '../components/ProductCard';
import type { ProductProps } from '../components/ProductCard';
import '../styles/TopSelling.css';

import verticalStripedShirt from '../assets/images/products/product-vertical-striped-shirt.jpg';
import courageTshirt from '../assets/images/products/product-courage-tshirt.jpg';
import bermudaShorts from '../assets/images/products/product-bermuda-shorts.jpg';
import fadedSkinnyJeans from '../assets/images/products/product-faded-skinny-jeans.jpg';

const TOP_SELLING_DATA: ProductProps[] = [
  {
    id: '5',
    name: 'Vertical Striped Shirt',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
    imageUrl: verticalStripedShirt,
  },
  {
    id: '6',
    name: 'Courage Graphic T-shirt',
    rating: 4.0,
    price: 145,
    imageUrl: courageTshirt,
  },
  {
    id: '7',
    name: 'Loose Fit Bermuda Shorts',
    rating: 3.0,
    price: 80,
    imageUrl: bermudaShorts,
  },
  {
    id: '8',
    name: 'Faded Skinny Jeans',
    rating: 4.5,
    price: 210,
    imageUrl: fadedSkinnyJeans,
  },
];

export const TopSelling: React.FC = () => {
  return (
    <section className="top-selling-section">
      <div className="container">
        {/* Note: The divider line requested above the section is provided by the bottom divider of NewArrivals,
            so it perfectly separates the sections without double borders. */}
        <h2 className="top-selling-title">TOP SELLING</h2>
        
        <div className="top-selling-products">
          {TOP_SELLING_DATA.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="btn-view-all">View All</button>
        </div>
        
      </div>
    </section>
  );
};
