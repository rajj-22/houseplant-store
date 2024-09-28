import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, deleteItemFromCart } from '../redux/cartSlice';
import './ShoppingCartPage.css'; // Ensure this is correctly imported

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeItemFromCart(id));
  const deleteItem = (id) => dispatch(deleteItemFromCart(id));

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} /> {/* Updated to use item.image */}
            <div className="item-details">
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => removeItem(item.id)}>Decrease</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button>Continue Shopping</button>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default ShoppingCart;
