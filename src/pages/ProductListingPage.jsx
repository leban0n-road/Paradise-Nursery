// File: src/pages/ProductListingPage.jsx
import React from 'react';
import './ProductListingPage.css';
import { useCart } from '../context/CartContext';

const airPurifyingPlants = [
  { id: 1, name: 'Snake Plant', price: '$15', description: 'Produces oxygen at night, improving air quality.', image: '/images/snake_plant.jpg', onSale: true },
  { id: 2, name: 'Spider Plant', price: '$12', description: 'Filters formaldehyde and xylene from the air.', image: '/images/spider_plant.jpg', onSale: true },
  { id: 3, name: 'Peace Lily', price: '$18', description: 'Removes mold spores and purifies the air.', image: '/images/peace_lily.jpg', onSale: true },
  { id: 4, name: 'Boston Fern', price: '$13', description: 'Natural humidifier and air purifier.', image: '/images/boston_fern.jpg', onSale: true },
  { id: 5, name: 'Rubber Plant', price: '$20', description: 'Cleans indoor air and easy to maintain.', image: '/images/rubber_plant.jpg', onSale: true },
  { id: 6, name: 'Aloe Vera', price: '$10', description: 'Heals burns and improves air quality.', image: '/images/aloe_vera.jpg', onSale: true },
];

const aromaticPlants = [
  { id: 7, name: 'Lavender', price: '$20', description: 'Calming scent, used in aromatherapy.', image: '/images/lavender.jpg', onSale: true },
  { id: 8, name: 'Jasmine', price: '$18', description: 'Sweet fragrance, promotes relaxation.', image: '/images/jasmine.jpg', onSale: true },
  { id: 9, name: 'Rosemary', price: '$15', description: 'Invigorating scent, often used in cooking.', image: '/images/rosemary.jpg', onSale: true },
  { id: 10, name: 'Mint', price: '$12', description: 'Fresh scent, used in cooking and tea.', image: '/images/mint.jpg', onSale: true },
  { id: 11, name: 'Lemon Balm', price: '$14', description: 'Citrusy scent, relieves stress and promotes sleep.', image: '/images/lemon_balm.jpg', onSale: true },
  { id: 12, name: 'Hyacinth', price: '$22', description: 'Beautiful flowering plant with a rich aroma.', image: '/images/hyacinth.jpg', onSale: true },
];

const ProductSection = ({ title, products, isInCart, onAddToCart }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="product-listing-wrapper">
      <div className="product-grid">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="product-card">
            {product.onSale && <div className="sale-tag">SALE</div>}
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button
                className={`add-to-cart ${isInCart(product.id) ? 'disabled' : ''}`}
                disabled={isInCart(product.id)}
                onClick={() => onAddToCart(product)}
              >
                {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProductListingPage = () => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-page">
      <ProductSection
        title="Air Purifying Plants"
        products={airPurifyingPlants}
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
      />
      <ProductSection
        title="Aromatic Fragrant Plants"
        products={aromaticPlants}
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductListingPage;

