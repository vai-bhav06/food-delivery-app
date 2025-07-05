import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import your pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Function to calculate total items in cart
  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = storedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  useEffect(() => {
    // Initial load
    updateCartCount();

    // Update on window focus or storage change
    const handleStorageChange = () => updateCartCount();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', updateCartCount);

    // Optional: Polling every 1s for changes if needed
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <Router>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
