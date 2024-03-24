import React from 'react';
//import Header from './components/Header'; // Adjust the path as necessary
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import SearchPage from './components/SearchPage.js';
import ProfilePage from './components/ProfilePage'; 
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
