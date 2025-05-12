import React from 'react';
import "./item.css";

function Item({ items, onQuantityChange }) {
  return (
    <div className="items-wrapper">
      {items.map((it, index) => (
        <div key={index} className='item-container'>
          <div className='item-name'>{it.name}</div>
          <div className='item-price'>${it.price}</div>
          <div className='item-controls'>
            <button className='minus-button quantity-button' onClick={() => onQuantityChange(index, -1)}>-</button>
            <p>{it.quantity}</p>
            <button className='plus-button quantity-button' onClick={() => onQuantityChange(index, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
