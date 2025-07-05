import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [cartCount]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Foodie</Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li>
            <Link to="/cart" onClick={toggleMenu} className="cart-link">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className={`cart-badge ${animate ? 'bounce' : ''}`}>
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
