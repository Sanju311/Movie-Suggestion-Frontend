import React from 'react';
import HeaderNav from '../components/HeaderNav'; 

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <HeaderNav/>
      <h1 className = "App-title">Movie Suggestion Engine</h1>
      <p>Enter your Letterboxd Username for Personalized AI Movie Recommendations!</p>
    </header>
  );
};

export default Header;
