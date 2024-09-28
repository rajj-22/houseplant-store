import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import AboutUs from './components/AboutUs'; // Import the About Us component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
      </Routes>
    </Router>
  );
}

export default App;
