// src/components/DishCard.js
import React from 'react';
import './DishCard.css'; // Create and style your DishCard component

const DishCard = ({ dishName, imageUrl, user, location, rating }) => {
  return (
    <div className="dish-card">
      <img src={imageUrl} alt={dishName} className="dish-image" />
      <h3 className="dish-name">{dishName}</h3>
      <p className="user">{user}</p>
      <p className="location">{location}</p>
      <p className="rating">{rating}</p>
    </div>
  );
};

export default DishCard;
