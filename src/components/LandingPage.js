import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-text">
        <h1>Welcome To "The Raj Nursery"</h1>
        
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
      <div className="hero-description">
        <p>**The Raj Nursery** is committed to providing high-quality plants that enhance both beauty and wellness in your home or office. From air-purifying plants to fragrant herbs, we offer a diverse selection for every plant lover. Our dedicated team ensures that each plant meets the highest standards of care, promoting a greener, healthier lifestyle. Whether you're new to gardening or an expert, Raj Nursery is here to support you every step of the way!</p>
      </div>
    </div>
  );
};

export default LandingPage;
