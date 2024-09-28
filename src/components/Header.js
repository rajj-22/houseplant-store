import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="app-header">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">The Raj Nursery</Link>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
      </nav>

      {/* Shopping Cart Icon */}
      <div className="cart-icon">
      <Link to="/cart">
          <img src="plant_images/cart.jpg" alt="Cart" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
