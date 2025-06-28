import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Header from './components/Header';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <ProductListingPage />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <ShoppingCartPage />
              </>
            }
          />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;

