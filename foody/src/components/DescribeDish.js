import React, { useState } from 'react';
import './DescribeDish.css'; // Make sure to create and style this CSS file
import { useNavigate } from 'react-router-dom';

const DescribeDish = () => {
  const [dishTitle, setDishTitle] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate(); 

  const handleNext = () => {
    // This function would handle the submission of the dish description
    console.log('Dish Title:', dishTitle);
    console.log('Experience with Meal:', experience);
    navigate('/describe-restaurant', { state: { dishTitle, experience } });
    // Here, you would typically send the data to your backend or navigate to another page
  };

  return (
    <div className="describe-dish-container">
      <input
        type="text"
        placeholder="Dish Title"
        value={dishTitle}
        onChange={(e) => setDishTitle(e.target.value)}
        className="dish-title-input"
      />
      <textarea
        placeholder="Your experience with your meal"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="experience-textarea"
      />
      <button onClick={handleNext} className="next-button">
        Next
      </button>
    </div>
  );
};

export default DescribeDish;
