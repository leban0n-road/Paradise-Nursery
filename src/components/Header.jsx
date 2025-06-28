//header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="text-group">
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
        </div>
      </div>

      <div className="header-center">
        <h2>Plants</h2>
      </div>

      <div className="header-right">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{getTotalItems()}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
