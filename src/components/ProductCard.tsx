import React from 'react';
import '../styles/ProductCard.css';

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  imageUrl,
  rating,
  price,
  originalPrice,
  discount,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.67376 0.627197L12.1835 6.55018L18.6601 7.15926L13.7547 11.4552L15.1973 17.818L9.67376 14.5367L4.15018 17.818L5.5928 11.4552L0.687439 7.15926L7.16405 6.55018L9.67376 0.627197Z" fill="#FFC633"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.67376 0.627197L12.1835 6.55018L18.6601 7.15926L13.7547 11.4552L15.1973 17.818L9.67376 14.5367V0.627197Z" fill="#FFC633"/>
          <path d="M9.67376 0.627197L7.16405 6.55018L0.687439 7.15926L5.5928 11.4552L4.15018 17.818L9.67376 14.5367V0.627197Z" fill="#FFC633" fillOpacity="0.4"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="product-card" data-id={id}>
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      
      <div className="product-details">
        <h3 className="product-title">{name}</h3>
        
        <div className="product-rating">
          <div className="stars">{renderStars(rating)}</div>
          <span className="rating-text">{rating}/<span className="rating-max">5</span></span>
        </div>
        
        <div className="product-pricing">
          <span className="current-price">${price}</span>
          {originalPrice && (
            <span className="original-price">${originalPrice}</span>
          )}
          {discount && (
            <span className="discount-badge">-{discount}%</span>
          )}
        </div>
      </div>
    </div>
  );
};
