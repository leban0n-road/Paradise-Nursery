import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ plant }) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(plant.id);

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.price}</p>
      <button onClick={() => addToCart(plant)} disabled={inCart}>
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;