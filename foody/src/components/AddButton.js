// AddButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // This hook is used for navigation
import './AddButton.css'; // Make sure to create and style this CSS file

const AddButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-post'); // This should be the route where you create a new post
  };

  return (
    <button className="add-button" onClick={handleClick}>
      {/* You can replace this with an icon if you prefer */}
      +
    </button>
  );
};

export default AddButton;
