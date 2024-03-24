// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import homeIcon from '../assets/home.jpg' // Path to your home icon
import searchIcon from '../assets/search.jpg'; // Path to your search icon
import profileIcon from '../assets/user.jpg'; // Path to your profile icon

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-item" activeClassName="active" exact>
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/search" className="nav-item" activeClassName="active">
        <img src={searchIcon} alt="Search" />
        <span>Search</span>
      </NavLink>
      <NavLink to="/profile" className="nav-item" activeClassName="active">
        <img src={profileIcon} alt="Profile" />
        <span>Profile</span>
      </NavLink>
    </div>
  );
};

export default NavBar;
