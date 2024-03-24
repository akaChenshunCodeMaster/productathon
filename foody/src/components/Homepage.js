import PostCard from './PostCard';
import image14 from '../assets/image 14.jpg';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import saraAvatar from '../assets/Sara.jpg'; 
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg'; 
import Header from './Header'; 
import NavigationTabs from './NavigationTabs'; // Make sure to import the NavigationTabs component
import annaAvatar from '../assets/anna.jpg';
import pizza from '../assets/pizza.jpg';
import React, { useState } from 'react';
import AddButton from './AddButton';



const HomePage = () => {
  // Assuming posts is an array of post objects with the needed properties

  const [activeTab, setActiveTab] = useState('explore');

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
        price: '8',
        rating: '5/5',
        mood: '🤩',
        
      }


    
  ];


  const followedPosts = [

    {
      name: 'Anna Jane',
        username: 'anna',
      avatarSrc: annaAvatar,
      time: '5h',
      location: 'Pizza Bar',
      title: 'Oregano Chicken Pizza',
      description: 'Decided to try out Pizza Bar ',
      imageSrc: pizza,
      price: '$23',
      rating: '2/5',
      mood: '🤨️',
      
    }

  ];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="home-page">
      <Header />
      {/* Add tab switching functionality */}
      <AddButton />
      <NavigationTabs onTabChange={handleTabChange} />
      <div className="posts">
        {
          activeTab === 'explore' ?
          posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))
          :
          followedPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))
        }
      </div>
    </div>
  );
};


export default HomePage;
