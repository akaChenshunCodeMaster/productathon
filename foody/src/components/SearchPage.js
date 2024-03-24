// src/components/SearchPage.js
import React from 'react';
import './SearchPage.css'; // Make sure to create this CSS file to style your component

const SearchPage = () => {
  return (
    <div className="search-page">
      <div className="search-bar">
        <input type="text" placeholder="Search for dishes, restaurant, profiles..." />
      </div>
      <section className="dishes-section">
        <h2>Dishes for you</h2>
        <button className="view-more">View More</button>
        {/* Placeholder for dishes list */}
      </section>
      <section className="restaurants-section">
        <h2>Restaurants for you</h2>
        <button className="view-more">View More</button>
        {/* Placeholder for restaurants list */}
      </section>
      {/* Add components or elements for listing dishes and restaurants */}
    </div>
  );
};

export default SearchPage;
