// src/components/SearchPage.js
import React from 'react';
import DishCard from './DishCard';
import RestaurantCard from './RestaurantCard';
import './SearchPage.css';
import image14 from '../assets/image 14.jpg';
import belisso from '../assets/belisso.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import azumi from '../assets/azumi.jpg';
import saraAvatar from '../assets/Sara.jpg'; 
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg'; 
import NavigationTabs from './NavigationSearch';

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

  const exampleProfiles = [
    {
      name: 'Ryan Joseph',
      username: '@ryan',
      imageUrl: userAvatar, // Replace with the path to Ryan's image
      followersCount: 23,
    },
    {
      name: 'Sarah Johnson',
      username: '@sarah',
      imageUrl: saraAvatar, // Replace with the path to Sarah's image
      followersCount: 12,
    },
    // ... more profiles
  ];

  return (
    <div className="search-page">
      <div className="search-bar">
        <input type="text" placeholder="Search for dishes, restaurant, profiles..." />
      </div>

      <NavigationTabs />

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

          {/* Recommended Profiles Section */}
          <div className="section">
        <div className="section-header">
          <h2>Recommended Profiles</h2>
          <button className="view-more">View More</button>
        </div>
        <div className="profiles-container">
          {exampleProfiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <img className="profile-avatar" src={profile.imageUrl} alt={profile.name} />
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <p>{profile.username}</p>
                <span>🏆 {profile.followersCount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;