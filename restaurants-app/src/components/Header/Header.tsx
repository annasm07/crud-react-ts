import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = function () {
  return (
    <header className="header">
      <h1 className="header__logo">Restaurants APP</h1>
      <nav className="header__navigation">
        <Link to="/" className="header__navigation--link">Home</Link>
        <Link to="/restaurants" className="header__navigation--link">Find a Restaurant</Link>
        <Link to="/favorites" className="header__navigation--link">My favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
