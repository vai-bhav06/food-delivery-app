import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import FilterButton from '../components/FilterButton';
import menuBackground from '../assets/images/menu.jfif';

const sampleFoods = [
  { id: 1, name: 'Burger', category: 'Burger', description: 'Cheesy delight', price: 99, image: 'burger.jpg' },
  { id: 2, name: 'Pizza', category: 'Pizza', description: 'Loaded with toppings', price: 199, image: 'pizza.jpg' },
  { id: 3, name: 'Fries', category: 'Fries', description: 'Crispy golden fries', price: 79, image: 'fries.jpg' },
  { id: 4, name: 'Veg Pizza', category: 'Pizza', description: 'Fresh veggies and cheese', price: 159, image: 'pizza.jpg' },
  { id: 5, name: 'Spicy Fries', category: 'Fries', description: 'Spicy masala fries', price: 89, image: 'fries.jpg' },
  { id: 6, name: 'Double Burger', category: 'Burger', description: 'Double patty with cheese', price: 129, image: 'burger.jpg' },
];

const categories = ['All', 'Burger', 'Pizza', 'Fries'];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);
  

  const handleAddToCart = (food) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === food.id);
  
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...food, quantity: 1 });
    }
  
    setCart(updatedCart); // ✅ Important: update state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // ✅ sync localStorage
    alert(`${food.name} added to cart!`);
  };
  

  const filteredFoods = filter === 'All' ? sampleFoods : sampleFoods.filter(food => food.category === filter);

  return (
    <div className="menu" style={{ backgroundImage: `url(${menuBackground})` }}>
      <div className="menu-overlay">
        <h2>Our Delicious Menu</h2>

        <div className="menu-filters">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              active={filter === cat}
              onClick={() => setFilter(cat)}
            />
          ))}
        </div>

        <div className="menu-list">
          {filteredFoods.map(food => (
            <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;