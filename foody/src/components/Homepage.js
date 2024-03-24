import React from 'react';
import PostCard from './PostCard';
import image14 from '../assets/image 14.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import saraAvatar from '../assets/Sara.jpg'; 
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg'; 
import Header from './Header'; 

const HomePage = () => {
  // Assuming posts is an array of post objects with the needed properties
  const posts = [
    {
      username: 'Ryan Joseph',
      avatarSrc: userAvatar,
      time: '2h',
      location: 'Belisso',
      title: 'Eggs Benedict with Hash Browns',
      description: 'Went to Belisso yesterday just to try their brunch - honestly so worth it!',
      imageSrc: image14,
      price: '$16',
      rating: '4/5',
      mood: '😊',
      
    },

    {
        username: 'Sarah Johnson',
        avatarSrc: saraAvatar,
        time: '5h',
        location: 'Azumi',
        title: 'Alaska Roll',
        description: 'I don’t ever want to try another alaska roll again! Azumi is the go to spot... read more',
        imageSrc: alaskaroll,
        price: '$8',
        rating: '5/5',
        mood: '🤩',
        
      },
    // ...more posts
  ];

  return (
    <div className="home-page">
        <Header />
        
      <div className="posts">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
