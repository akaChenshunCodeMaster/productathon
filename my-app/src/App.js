import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        {/* Route for Home Page */}
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;

