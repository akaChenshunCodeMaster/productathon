// PostCard.js
import React from 'react';
import './PostCard.css'; // Make sure to create this CSS file to style your component
import { Link } from 'react-router-dom';


const PostCard = ({name, username, avatarSrc, time, location, title, description, imageSrc, price, rating, mood }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img className="user-avatar" src={avatarSrc} alt={`${username} avatar`} />
        <div className="user-details">
        <div className="name-and-username">
        <span className="user-real-name">{name}</span> {/* Add this span for the real name */}
        <span className="username">@{username}</span>
      </div>
      <div className="post-time">{time} ago</div>

        </div>
      </div>
      
      <div className="post-body">
        <div className="restaurant-name">
        <Link to={`/restaurant/${location.replace(/\s+/g, '-').toLowerCase()}`}>{location}</Link>
        </div>
        <Link to="/post" className="post-link"> {/* Fixed path for all posts */}
        <div className="post-title">{title}</div>
        <div className="post-description">{description}</div>
        <img className="post-image" src={imageSrc} alt="Dish" />
        <div className="post-footer">
          <span className="price">{price}</span>
          <span className="rating">{rating}</span>
          <span className="mood">{mood}</span>
        </div>
        </Link>
      </div>
      <div className="post-interactions">
        <span className="likes">❤️ 13</span>
        <span className="comments">💬 4</span>
        <span className="shares">🔗 5</span>
      </div>
    </div>
  );
};

export default PostCard;
