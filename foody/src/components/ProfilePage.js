import React from 'react';
import './ProfilePage.css'; // Ensure path is correct
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg'; // Update with the correct path

const ProfilePage = () => {
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
    </div>
  );
};

export default ProfilePage;
