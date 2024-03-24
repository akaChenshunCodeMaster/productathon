// NavigationTabs.js
import React, { useState } from 'react';
import styles from './Navi.module.css'; // Ensure the path is correct

function NavigationTabs() {
  const [activeTab, setActiveTab] = useState('explore');

  return (
    <div className={styles.tabs}>
      <button
        onClick={() => setActiveTab('explore')}
        className={activeTab === 'explore' ? styles.activeTab : styles.tab}
      >
        Explore
      </button>
      <button
        onClick={() => setActiveTab('following')}
        className={activeTab === 'following' ? styles.activeTab : styles.tab}
      >
        Following
      </button>
    </div>
  );
}

export default NavigationTabs;
