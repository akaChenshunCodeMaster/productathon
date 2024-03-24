// NavigationTabs.js
import React from 'react';
import styles from './Navi.module.css'; // Ensure the path is correct

function NavigationTabs({ onTabChange, activeTab }) {
  return (
    <div className={styles.tabs}>
      <button
        onClick={() => onTabChange('explore')}
        className={activeTab === 'explore' ? styles.activeTab : styles.tab}
      >
        Explore
      </button>
      <button
        onClick={() => onTabChange('following')}
        className={activeTab === 'following' ? styles.activeTab : styles.tab}
      >
        Following
      </button>
    </div>
  );
}

export default NavigationTabs;
