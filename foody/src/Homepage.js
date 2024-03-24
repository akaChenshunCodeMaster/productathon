import React from 'react';
import PostCard from './Postcard';

const HomePage = () => {
  // Assuming posts is an array of post objects with the needed properties
  const posts = [
    {
      username: 'Ryan',
      time: '2h',
      location: 'Belisso',
      description: 'Eggs Benedict with Hash Browns',
      imageSrc: 'C:\Users\USER\Desktop\productathon\foody\src\assets\image 14.png',
      price: '$16',
      rating: '4/5',
      mood: '😊',
      // other properties like likes, comments, shares if they're dynamic
    },
    // ...more posts
  ];

  return (
    <div className="home-page">
      <div className="posts">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
