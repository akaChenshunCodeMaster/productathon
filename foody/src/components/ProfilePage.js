import React, { useState } from 'react';
import './ProfilePage.css';
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg';
import image14 from '../assets/image 14.jpg';
import PostCard from './PostCard';
import alaskaroll from '../assets/AlaskaRoll.jpg';
import saraAvatar from '../assets/Sara.jpg'; 
import RestaurantCard from './RestaurantCard';
import belisso from '../assets/belisso.jpg';
import azumi from '../assets/azumi.jpg';


const ProfilePage = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('posts');
  const [activeSavedContent, setActiveSavedContent] = useState('posts');

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
      
    }


  ];

  const savedPosts = [

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
      
    }

  ];

  const restaurantsData = [
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

  const toggleSavedContent = () => {
    setActiveSavedContent(activeSavedContent === 'posts' ? 'restaurants' : 'posts');
  };

  return (
    <div className="profileContainer">
       <div className="profileCard">
        <img src={userAvatar} alt="User Avatar" className="avatar" />
        <h1 className="name">Ryan Joseph</h1>
        <p className="username">@ryan</p>
        <div className="statsContainer">
          <div className="statItem">
            <span className="statNumber">1</span>
            <span className="statLabel">Post</span>
          </div>
          <div className="statItem">
            <span className="statNumber">123</span>
            <span className="statLabel">Followers</span>
          </div>
          <div className="statItem">
            <span className="statNumber">123</span>
            <span className="statLabel">Following</span>
          </div>
        </div>
        <button className="editButton">Edit Profile</button>
      </div>
      
      <div className="profile-navigation">
        <button className={`nav-button ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')}>Posts</button>
        <button className={`nav-button ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>Saved</button>
        {/* Additional buttons for other categories */}
      </div>

      {activeTab === 'saved' && (
        <div className="toggle-saved-content">
          <button onClick={toggleSavedContent} className="orange-button">
            {activeSavedContent === 'posts' ? 'Posts' : 'Restaurants'}
          </button>
        </div>
      )}

<div className="content">
        {activeTab === 'posts' && posts.map((post, index) => <PostCard key={index} {...post} />)}
        {activeTab === 'saved' && activeSavedContent === 'posts' && savedPosts.map((post, index) => <PostCard key={index} {...post} />)}
        {activeTab === 'saved' && activeSavedContent === 'restaurants' && restaurantsData.map((restaurant, index) => <RestaurantCard key={index} {...restaurant} />)}
      </div>
    </div>
  );
};

export default ProfilePage;