import React from 'react';
import './ProductListingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom'; // Import Link for routing

const products = [
  { id: 1, name: 'Snake Plant', price: 15, image: "/plant_images/snake-plant.jpg" },
  { id: 2, name: 'Spider Plant', price: 12, image: "/plant_images/spider-plant-.jpg" },
  { id: 3, name: 'Peace Lily', price: 18, image: "/plant_images/peace_lily.jpeg" },
  { id: 4, name: 'Cactus', price: 25, image: "/plant_images/Cactus.webp" },
  { id: 5, name: 'Ugaoo', price: 25, image: "/plant_images/ugaoo.webp" },
  { id: 6, name: 'Lucky Bamboo', price: 25, image: "/plant_images/Lucky-Bamboo-Plant.jpg" },
  // Add more products as needed
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  // Function to check if the product is already in the cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="product-listing-page">
      <h2>Plants</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-button"
              disabled={isInCart(product.id)} // Disable button if already in cart
            >
              {isInCart(product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      {/* Continue Shopping Button */}
      <Link to="/cart">
        <button className="continue-shopping-button">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ProductListingPage;
