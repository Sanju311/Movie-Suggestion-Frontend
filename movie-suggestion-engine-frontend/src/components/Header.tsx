import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav className="header-nav">
        <a href="/about-us" className="nav-link">About Us</a>
      </nav>
      <h1>Movie Suggestion Engine</h1>
      <p>Enter your Letterboxd Username to get Personalized Movie Suggestions!</p>
    </header>
  );
};

export default Header;
