import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/images/bg.jpg';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content">
        <h1>Welcome to Foodie!</h1>
        <p>Your favorite meals delivered fast at your door.</p>
        <Link to="/menu"><button className="primary-btn">Order Now</button></Link>
      </div>
    </div>
  );
};

export default Home;