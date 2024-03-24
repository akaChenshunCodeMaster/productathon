// NavigationTabs.js
import React, { useState } from 'react';
import styles from './Navi.module.css'; // Ensure the path is correct

function NavigationTabs() {
  const [activeTab, setActiveTab] = useState('food');

  return (
    <div className={styles.tabs}>
      <button
        onClick={() => setActiveTab('food')}
        className={activeTab === 'food' ? styles.activeTab : styles.tab}
      >
        Food
      </button>
      <button
        onClick={() => setActiveTab('restaurant')}
        className={activeTab === 'restaurant' ? styles.activeTab : styles.tab}
      >
        Restaurant
      </button>
      <button
        onClick={() => setActiveTab('profile')}
        className={activeTab === 'profile' ? styles.activeTab : styles.tab}
      >
        Profile
      </button>
    </div>
  );
}

export default NavigationTabs;
