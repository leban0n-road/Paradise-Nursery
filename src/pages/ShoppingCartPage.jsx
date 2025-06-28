// File: src/pages/ShoppingCartPage.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartPageItemCard from '../components/CartPageItemCard';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const { cartItems, getTotalCost, incrementItem, decrementItem, removeFromCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="shopping-cart-page">
      <h2 className="cart-title">Total Cart Amount: ${getTotalCost().toFixed(2)}</h2>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <CartPageItemCard
            key={item.id}
            product={item}
            quantity={item.quantity}
            onIncrement={() => incrementItem(item.id)}
            onDecrement={() => decrementItem(item.id)}
            onDelete={() => removeFromCart(item.id)}
          />
        ))}
      </div>

      <div className="cart-buttons">
        <button className="continue-button" onClick={() => navigate('/products')}>
          Continue Shopping
        </button>
        <button className="checkout-button" onClick={() => setShowPopup(true)}>
          Checkout
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>Coming Soon</p>
            <button className="popup-ok-button" onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
