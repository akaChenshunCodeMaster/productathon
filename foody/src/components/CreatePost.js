import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'; // Make sure to style your component

const CreatePost = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
  
    const handleImageChange = (event) => {
      setSelectedImage(event.target.files[0]);
    };
  
    const handleNext = () => {
      // This function will be called when the Next button is clicked
      // You will handle the navigation to the next step here
      navigate('/describe');
      console.log('Go to the next step');
    };
  
    return (
      <div className="create-post-container">
        <h1>Add a photo of your meal</h1>
        <div className="upload-photo-area">
          {selectedImage ? (
            <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="image-preview" />
          ) : (
            <div className="placeholder-container">
              {/* Placeholder content */}
            </div>
          )}
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            id="file-input"
            style={{ display: 'none' }}
          />
          <label htmlFor="file-input" className="add-photo-button">
            Add Photo
          </label>
        </div>
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    );
  };
  
  export default CreatePost;
