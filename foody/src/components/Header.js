// Header.js
import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/Vector.jpg'; // Update the path if needed

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Munched</h1>
    </header>
  );
}

export default Header;
