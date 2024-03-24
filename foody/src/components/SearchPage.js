// src/components/SearchPage.js
import React from 'react';
import DishCard from './DishCard';
import RestaurantCard from './RestaurantCard';
import './SearchPage.css';
import image14 from '../assets/image 14.jpg';
import belisso from '../assets/belisso.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';

const SearchPage = () => {
  // Example data - replace with real data fetched from your server or API
  const exampleDishes = [
    {
      dishName: 'Eggs Benedict with Hash Browns',
      imageUrl: image14, // Replace with actual path
      user: '@ryan',
      location: 'Belisso',
      rating: '4/5'
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
    // ... more restaurants
  ];

  return (
    <div className="search-page">
    <div className="search-bar">
    <input type="text" placeholder="Search for dishes, restaurant, profiles..." />
    </div>
      <section className="dishes-section">
        {/* ... */}
        {exampleDishes.map((dish, index) => (
          <DishCard key={index} {...dish} />
        ))}
      </section>
      <section className="restaurants-section">
        {/* ... */}
        {exampleRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </section>
    </div>
  );
};

export default SearchPage;