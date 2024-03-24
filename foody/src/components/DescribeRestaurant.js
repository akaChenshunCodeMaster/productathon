// DescribeRestaurant.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './DescribeRestaurant.css'; // Your CSS file

const DescribeRestaurant = () => {
  const [restaurant, setRestaurant] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState(0);
  const [mood, setMood] = useState('');
  const navigate = useNavigate(); 

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    // Handle the form submission logic
    console.log({ restaurant, price, rating, mood });
    navigate('/');
    // Navigation to the next page can go here
  };

  return (
    <div className="describe-restaurant-container">
    <label htmlFor="restaurant-name" className="input-label">Restaurant</label>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)}
        className="input-field"
      />

    <label htmlFor="price" className="input-label">Price</label>
      <input
        type="number"
        placeholder="Enter Dollar Amount"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field"
      />
    
    <label className="input-label">Rating</label>
      <div className="rating-container">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => handleRatingChange(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>

    <label htmlFor="mood-select" className="input-label">Mood</label>
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="mood-select input-field"
      >
        <option value="">Select One</option>
        <option value="happy">😍 Chef's Kiss</option>
        <option value="love">😊 Quality Time</option>
        <option value="surprised">😮 It was Okay </option>
        <option value="sad">😞 Questionable</option>
        <option value="angry">😠 Could have been better</option>
      </select>
      <button onClick={handleSubmit} className="next-button">
        Post
      </button>
    </div>
  );
};

export default DescribeRestaurant;
