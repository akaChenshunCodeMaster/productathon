import React from 'react';

function FoodCard({ title, description, imageUrl }) {
  return (
    <div className="food-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FoodCard;
