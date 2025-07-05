import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartBackground from '../assets/images/cartt.jfif';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const initialized = storedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(initialized);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity < 1) updatedCart[index].quantity = 1;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div className="cart-page" style={{ backgroundImage: `url(${cartBackground})` }}>
      <div className="cart-overlay">
        <h2>Your Cart 🛒</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={require(`../assets/images/${item.image}`)} alt={item.name} className="cart-img" />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <div className="quantity-stepper">
                      <button onClick={() => updateQuantity(index, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(index, 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ₹{getTotal()}</h3>
              <button className="primary-btn" onClick={() => navigate('/payment')}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;