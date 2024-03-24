import React, { useState } from 'react';
import './RestaurantPage.css'; // Make sure to create and style this CSS file
import restaurantpic from '../assets/restaurant.jpg'; 
import mapImage from '../assets/map.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import dragonroll from '../assets/dragonroll.jpg';
import sashimi from '../assets/sashimi.jpg';


const RestaurantPage = () => {

  
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
      setIsSaved(!isSaved);
    };

  // Hardcoded data for the restaurant page
  const restaurant = {
    name: 'Azumi',
    imageUrl: restaurantpic, // replace with your image path
    address: '1235 Produthack Way, Vancouver',
    rating: '⭐ 4.7/5',
    googleMapsUrl: 'https://www.google.com/maps/place/Azumi+Sushi/@43.78,-79.1386111,15z/data=!4m6!3m5!1s0x89d4dbbb6392923d:0xee3f2cabb4971e6b!8m2!3d43.78!4d-79.1386111!16s%2Fg%2F1tcym0d9?entry=ttu', // replace with your Google Maps link
    description: 'Azumi is an intimate, casual spot for dining with a variety of Japanese inspired sushi rolls to choose from.',
    tags: ['Sushi', 'Mood 😊'], // replace with actual tags
    dishes: [
      {
        id: 1,
        name: 'Alaska Roll',
        imageUrl: '/path-to-alaska-roll.jpg', // replace with your image path
        price: '$8',
        rating: '5/5',
        mood: '😊',
      },
      // ...more dishes
    ],
  };

  return (
    <div className="restaurant-page">
      <img className="restaurant-image" src={restaurant.imageUrl} alt={restaurant.name} />
      <h1 className="restaurant-name">{restaurant.name}</h1>
      <p className="restaurant-rating">{restaurant.rating}</p>
      <p className="restaurant-location">{restaurant.address}</p>
     {/* Map section */}
     <div className="map-container">
        <img src={mapImage} alt="Location map" className="map-image"/>
        <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="google-maps-link">
          View in Google Maps →
        </a>
      </div>
      <p className="restaurant-description">{restaurant.description}</p>
      
      <div className="dishes-from-community">
        <h2>Dishes from community</h2>
        <div className="dishes-container">
          <div className="dish-item">
            <img src={alaskaroll} alt="Alaska Roll" />
            <p>Alaska Roll</p>
            <p>@ryan</p>
            <p>Belisso</p>
            <p>💰 $8</p>
            <p>⭐ 5/5</p>
            <p>😊 Mood</p>
          </div>
          <div className="dish-item">
            <img src={dragonroll} alt="Dragon Roll" />
            <p>Dragon Roll</p>
            <p>@sarah</p>
            <p>Azumi</p>
            <p>💰 $12</p>
            <p>⭐ 5/5</p>
            <p>😊 Mood</p>
          </div>
          <div className="dish-item">
            <img src={sashimi} alt="Assorted Sashimi" />
            <p>Assorted Sashimi</p>
            <p>@ann</p>
            <p>Azumi</p>
            <p>💰 $19</p>
            <p>⭐ 2/5</p>
            <p>😞 Mood</p>
          </div>
        </div>
      </div>
      
      <button 
        className={`save-restaurant-button ${isSaved ? 'saved' : ''}`}
        onClick={handleSave}
      >
        {isSaved ? 'Saved' : 'Save restaurant'}
      </button>

    </div>
  );
};

export default RestaurantPage;
