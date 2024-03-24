import React from 'react';
import PostCard from './PostCard';
import image14 from '../assets/image 14.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import saraAvatar from '../assets/Sara.jpg'; 
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg'; 
import Header from './Header'; 
import NavigationTabs from './NavigationTabs'; // Make sure to import the NavigationTabs component


const HomePage = () => {
  // Assuming posts is an array of post objects with the needed properties
  const posts = [
    {
      name: 'Ryan Joseph',
      username: 'ryan',
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
        name: 'Sarah Johnson',
        username: 'sarah',
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
      <NavigationTabs />
      <div className="posts">
        {posts.map((post, index) => (
          // Now pass the 'name' prop to the PostCard component
          <PostCard key={index} name={post.name} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
