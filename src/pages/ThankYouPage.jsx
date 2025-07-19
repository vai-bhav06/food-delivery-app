// File: src/pages/ThankYouPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import thankyouBackground from '../assets/images/thakyoubg.jpg';

const ThankYouPage = () => {
  return (
    <div className="thankyou-page" style={{ backgroundImage: `url(${thankyouBackground})` }}> 
    <div className="thankyou-container">
      <h1>🎉 Thank You for Order!</h1>
      <p>Your food is on the way. Enjoy your meal! 🍽️</p>
      <Link to="/menu" className="primary-btn">Browse More</Link>
    </div>
  </div>
  
  );
};

export default ThankYouPage;
