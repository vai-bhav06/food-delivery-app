import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import FilterButton from '../components/FilterButton';
import menuBackground from '../assets/images/menu.jfif';

const sampleFoods = [
  { id: 1, name: 'Burger', category: 'Burger', description: 'Cheesy delight', price: 99, image: 'burger.jpg' },
  { id: 2, name: 'Non-veg Pizza', category: 'Pizza', description: 'Loaded with toppings', price: 199, image: 'nonveg-pizza.jpg' },
  { id: 3, name: 'Fries', category: 'Fries', description: 'Crispy golden fries', price: 79, image: 'fries.jpg' },
  { id: 4, name: 'Veg Pizza', category: 'Pizza', description: 'Fresh veggies and cheese', price: 159, image: 'pizza.jpg' },
  { id: 5, name: 'Garlic Bread', category: 'Veg', description: 'Spicy masala breads', price: 89, image: 'garlic-bread.jpg' },
  { id: 6, name: 'Shawarma', category: 'Non-Veg', description: 'Double patty with cheese', price: 129, image: 'shawarma.jpg' },
  { id: 7, name: 'Paneer Thali', category: 'Veg', description: 'North Indian thali with paneer', price: 120, image: 'panner-thali.jpg' },
  { id: 8, name: 'Vegetable Biryani', category: 'Veg', description: 'Aromatic spiced veg rice', price: 100, image: 'veg-biryani.jpg' },
  { id: 9, name: 'Chicken Biryani', category: 'Non-Veg', description: 'Rich chicken rice meal', price: 180, image: 'chiken-biryani.jpg' },
  { id: 10, name: 'Fish Curry Meal', category: 'Non-Veg', description: 'Spicy fish curry and rice', price: 200, image: 'fish-curry.jpg' },
  { id: 11, name: 'Masala Dosa', category: 'South Indian', description: 'Crispy dosa with masala filling', price: 80, image: 'masala-dosa.jpg' },
  { id: 12, name: 'Idli Sambar', category: 'South Indian', description: 'Soft idlis with tangy sambar', price: 60, image: 'Idli-Sambhar.jpg' },
  { id: 13, name: 'Rajma Chawal', category: 'Veg', description: 'Kidney beans curry with rice', price: 90, image: 'rajma-chawal.jpg' },
  { id: 14, name: 'Palak Paneer', category: 'Veg', description: 'Spinach curry with cottage cheese', price: 130, image: 'palak-panner.jpg' },
  { id: 15, name: 'Pongal', category: 'South Indian', description: 'Mildly spiced rice & dal dish', price: 70, image: 'pongal.jpg' },
  { id: 16, name: 'Uttapam', category: 'South Indian', description: 'Thick pancake with toppings', price: 85, image: 'uttapam.jpg' },
  { id: 17, name: 'Tandoori Chicken', category: 'Non-Veg', description: 'Grilled chicken in spices', price: 220, image: 'tandoori-chiken.jpg' },
  { id: 18, name: 'Rava Dosa', category: 'South Indian', description: 'Crispy semolina dosa', price: 75, image: 'rava-dosa.jpg' },
  { id: 19, name: 'Mix Veg Curry', category: 'Veg', description: 'Mixed seasonal vegetables in curry', price: 95, image: 'mix-veg-cury.jpg' },
  { id: 20, name: 'Chole Bhature', category: 'Veg', description: 'Spiced chickpeas with fluffy bread', price: 110, image: 'chole-bhature.jpg' }
];


const categories = ['All', 'Burger', 'Pizza', 'Fries', 'Veg', 'Non-Veg', 'South Indian'];


const Menu = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');

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

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${food.name} added to cart!`);
  };

  const filteredFoods = filter === 'All'
    ? sampleFoods
    : sampleFoods.filter(food => food.category === filter);

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
