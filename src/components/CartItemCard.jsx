import React from 'react';
import { useCart } from '../context/CartContext';

const CartItemCard = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CartItemCard;