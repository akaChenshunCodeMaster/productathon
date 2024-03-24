// src/components/RestaurantCard.js
import React from 'react';
import './RestaurantCard.css'; // Create and style your RestaurantCard component

const RestaurantCard = ({ name, imageUrl, address, rating }) => {
  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={name} className="restaurant-image" />
      <h3 className="restaurant-name">{name}</h3>
      <p className="restaurant-address">{address}</p>
      <div className="restaurant-rating">{rating}</div>
    </div>
  );
};

export default RestaurantCard;
