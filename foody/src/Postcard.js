// PostCard.js
import React from 'react';
import './Postcard.css'; // Make sure to create this CSS file to style your component

const Postcard = ({ username, time, location, description, imageSrc, price, rating, mood }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img className="user-avatar" src="C:\Users\USER\Desktop\productathon\foody\src\assets\unsplash_v2aKnjMbP_k.png" alt={`${username} avatar`} />
        <div className="user-details">
          <div className="username">@{username}</div>
          <div className="post-time">{time} ago</div>
        </div>
      </div>
      <div className="post-body">
        <div className="restaurant-name">{location}</div>
        <div className="post-description">{description}</div>
        <img className="post-image" src={imageSrc} alt="Dish" />
        <div className="post-footer">
          <span className="price">{price}</span>
          <span className="rating">{rating}</span>
          <span className="mood">{mood}</span>
        </div>
      </div>
      <div className="post-interactions">
        <span className="likes">❤️ 13</span>
        <span className="comments">💬 4</span>
        <span className="shares">🔗 5</span>
      </div>
    </div>
  );
};

export default Postcard;
