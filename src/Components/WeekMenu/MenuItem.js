// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css';



const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.description} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-title">{item.type}</h3>
        <p className="menu-item-price">{item.price}</p>
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  );
};


export default MenuItem;
