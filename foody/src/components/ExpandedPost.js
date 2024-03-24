// ExpandedPost.js
import React from 'react';
import './ExpandedPost.css'; // Make sure to have this CSS file
import alaskaroll from '../assets/AlaskaRoll.jpg';
import saraAvatar from '../assets/Sara.jpg';
import annaAvatar from '../assets/anna.jpg'; // Assuming you have an avatar for Anna
import jessAvatar from '../assets/jesse.jpg'; // Assuming you have an avatar for Jess

const ExpandedPost = () => {
    // You would typically fetch this data from a backend or pass it through props
    const postDetails = {
      username: 'Sarah Johnson',
      name: '@sarah',
      userAvatar: saraAvatar,
      postTime: '2h ago',
      restaurantName: 'Azumi',
      postTitle: 'Alaska Roll',
      postDescription: "I don't ever want to try another alaska roll again! Azumi is the go-to spot for reliable service and affordable sushi when you're on a time crunch.",
      postImage: alaskaroll,
      price: '$8',
      rating: '5/5',
      mood: '😊',
      likes: 7,
      comments: 4,
      shares: 5,
      commentList: [
        { username: 'Anna Jane', avatar: annaAvatar, commentText: "I can't wait to try this place out tomorrow!" },
        { username: 'Jess Eats', avatar: jessAvatar, commentText: "@anna OMG I'm going to be there tomorrow too" },
        // ...other comments
      ],
    };
  
    return (
      <div className="expanded-post">
        {/* Header with avatar and username */}
        <div className="post-header">
          <img src={postDetails.userAvatar} alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <span className="username">{postDetails.username}</span>
            <span className="name">{postDetails.name}</span>
            <span className="post-time">{postDetails.postTime}</span>
          </div>
          {/* Options button if needed */}
        </div>
  
        {/* Post content */}
        <div className="post-body">
          <h2 className="restaurant-name">{postDetails.restaurantName}</h2>
          <h3 className="post-title">{postDetails.postTitle}</h3>
          <p className="post-description">{postDetails.postDescription}</p>
          <img src={postDetails.postImage} alt="Dish" className="post-image" />
        </div>
  
        {/* Post details like price, rating, mood */}
        <div className="post-details">
          <span className="price">{postDetails.price}</span>
          <span className="rating">{postDetails.rating}</span>
          <span className="mood">{postDetails.mood}</span>
        </div>
  
        {/* Interactions like likes, comments, shares */}
        <div className="post-interactions">
          <span className="likes">❤️ {postDetails.likes}</span>
          <span className="comments">💬 {postDetails.comments}</span>
          <span className="shares">🔗 {postDetails.shares}</span>
        </div>
  
        {/* Comments section */}
        <div className="comments-section">
          {postDetails.commentList.map((comment, index) => (
            <div className="comment" key={index}>
              <img src={comment.avatar} alt={`${comment.username} avatar`} className="comment-avatar" />
              <span className="comment-username">@{comment.username}</span>
              <span className="comment-text">{comment.commentText}</span>
            </div>
          ))}
        </div>
  
        {/* Add comment input */}
        <div className="add-comment">
          <input type="text" placeholder="Add a comment..." />
        </div>
      </div>
    );
  };
  
  export default ExpandedPost;