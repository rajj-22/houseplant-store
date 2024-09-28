import React from 'react';

const PlantCard = ({ plant, addToCart }) => {
  return (
    <div className="plant-card">
      <img src={plant.thumbnail} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
