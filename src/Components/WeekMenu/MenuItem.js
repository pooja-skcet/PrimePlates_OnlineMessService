// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, type, price, description, tag }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p className="type">{type}</p>
      <p className="price">Starting @ {price}</p>
      <p className="description">{description}</p>
      {tag && <span className="tag">{tag}</span>}
    </div>
  );
};

export default MenuItem;
