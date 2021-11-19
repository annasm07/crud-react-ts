import React from 'react';
import { Link } from 'react-router-dom';

const Header = function () {
  return (
    <header>
      <h1>Restaurants APP</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/restaurants">Find a Restaurant</Link>
      </nav>
    </header>
  );
};

export default Header;
