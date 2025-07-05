import React from 'react';

const FoodCard = ({ food, onAddToCart }) => {
  return (
    <div className="food-card">
      <img src={require(`../assets/images/${food.image}`)} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <div className="price-cart">
  <p>₹{food.price}</p>
  <button className="add-to-cart-btn" onClick={() => onAddToCart(food)}>
    🛒 Add to Cart
  </button>
</div>

    </div>
  );
};

export default FoodCard;