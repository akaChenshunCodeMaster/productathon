import React from 'react';
import styles from './ProfilePage.css'; // Make sure the path is correct
import userAvatar from '../assets/unsplash_v2aKnjMbP_k.jpg'; 

const ProfilePage = () => {
  // Hard-coded user data
  const userData = {
    name: 'Ryan Joseph',
    username: '@ryan',
    avatarSrc: userAvatar, // Path to your image file
    postCount: '5',
    followersCount: '123',
    followingCount: '123',
  };

  // Hard-coded posts data - replace with actual post data
  const userPosts = [
    // ... Array of user post objects
  ];

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img src={userData.avatarSrc} alt="User Avatar" className={styles.userAvatar} />
        <h1>{userData.name}</h1>
        <p>{userData.username}</p>
        <div className={styles.userStats}>
          <span>{userData.postCount} Posts</span>
          <span>{userData.followersCount} Followers</span>
          <span>{userData.followingCount} Following</span>
        </div>
        <button className={styles.editProfileBtn}>Edit Profile</button>
      </div>

      <div className={styles.postTabs}>
        <button className={`${styles.tabButton} ${styles.activeTabButton}`}>Posts</button>
        <button className={styles.tabButton}>Saved</button>
      </div>

      <div className={styles.postGrid}>
        {userPosts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <img src={post.imageSrc} alt="Post" />
            {/* Add other post details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
