import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(data);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Simulate placing order
    alert('✅ Order Placed Successfully!');
    localStorage.removeItem('cart');
    navigate('/thankyou');
  };

  return (
    <div className="payment-page">
    <div className="payment-container">
      <h2>Confirm Your Order</h2>
      <div className="payment-summary">
        <ul>
          <li><span>Burger x2</span> <span>₹198</span></li>
          <li><span>Fries x1</span> <span>₹79</span></li>
        </ul>
        <div className="payment-total">Total: ₹277</div>
      </div>
      <button className="payment-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  </div>
  
  );
};

export default PaymentPage;
