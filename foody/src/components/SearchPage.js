// src/components/SearchPage.js
import React from 'react';
import DishCard from './DishCard';
import RestaurantCard from './RestaurantCard';
import './SearchPage.css';
import image14 from '../assets/image 14.jpg';
import belisso from '../assets/belisso.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import azumi from '../assets/azumi.jpg';

const SearchPage = () => {
  // Example data - replace with real data fetched from your server or API
  const exampleDishes = [
    {
      dishName: 'Eggs Benedict with Hash Browns',
      imageUrl: image14, // Replace with actual path
      location: 'Belisso',
      user: '@ryan',
    },

    {
        dishName: 'Alaska Roll',
        imageUrl: alaskaroll, // Replace with actual path
        location: 'Azumi',
        user: '@sarah',
      },
    // ... more dishes
  ];

  const exampleRestaurants = [
    {
      name: 'Belisso',
      imageUrl: belisso, // Replace with actual path
      address: '1235 Produthack Way, Vancouver',
      rating: '4.5/5'
    },

    {
        name: 'Azumi',
        imageUrl: azumi, // Replace with actual path
        address: '1235 Produthack Way, Vancouver',
        rating: '4.5/5'
      },
    // ... more restaurants
  ];

  return (
    <div className="search-page">
      <div className="search-bar">
        <input type="text" placeholder="Search for dishes, restaurant, profiles..." />
      </div>

      {/* Dishes Section */}
      <div className="section">
        <div className="section-header">
          <h2>Dishes for you</h2>
          <button className="view-more">View More</button>
        </div>
        <div className="cards-container">
          {exampleDishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="section">
        <div className="section-header">
          <h2>Restaurants for you</h2>
          <button className="view-more">View More</button>
        </div>
        <div className="resturantcards-container">
          {exampleRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;