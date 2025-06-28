// CartPageItemCard.jsx
import React from 'react';
import './CartPageItemCard.css';
import plusIcon from '../assets/plus-icon.png';
import minusIcon from '../assets/minus-icon.png';

const CartPageItemCard = ({ product, quantity, onIncrement, onDecrement, onDelete }) => {
  // Convert price to a number even if it's a string like "$15"
  const price = Number(
    typeof product.price === 'string'
      ? product.price.replace(/[^0-9.]/g, '')
      : product.price
  );
  
  const total = (price * quantity).toFixed(2); // Calculate total cost

  return (
    <div className="cart-item-card">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>${price}</p>
        <div className="cart-item-quantity">
          <img
            src={minusIcon}
            alt="Decrement"
            className="icon-button"
            onClick={onDecrement}
          />
          <span>{quantity}</span>
          <img
            src={plusIcon}
            alt="Increment"
            className="icon-button"
            onClick={onIncrement}
          />
        </div>
        <p className="cart-item-total">
          Total: ${total}
        </p>
        <button className="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CartPageItemCard;
