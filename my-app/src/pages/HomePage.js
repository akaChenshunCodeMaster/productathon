import React from 'react';
import FoodCard from '../components/FoodCard';

function HomePage() {
  // Example data, replace with your own
  const foodItems = [
    { id: 1, title: 'Pizza', description: 'Delicious cheese pizza', imageUrl: 'my-app/src/components/pizza.jpg' },
    // Add more food items here
  ];

  return (
    <div className="home-page">
      {foodItems.map(item => (
        <FoodCard key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}

export default HomePage;
