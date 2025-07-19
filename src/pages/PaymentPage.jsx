import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import paymentBackground from '../assets/images/paymentbg.jpeg';

const PaymentPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(data);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handlePlaceOrder = () => {
    alert('✅ Order Placed Successfully!');
    localStorage.removeItem('cart');
    navigate('/thankyou');
  };

  return (
    <div className="payment-page" style={{ backgroundImage: `url(${paymentBackground})` }}>
      <div className="payment-container">
        <h2>Confirm Your Order</h2>
        <div className="payment-summary">
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name} x{item.quantity || 1}</span>
                <span>₹{item.price * (item.quantity || 1)}</span>
              </li>
            ))}
          </ul>
          <div className="payment-total">Total: ₹{total}</div>
        </div>
        <button className="payment-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
