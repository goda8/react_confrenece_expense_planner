import React from 'react';
import './mealSelection.css'

function MealSelection({ items, onSelectionChange, quantity, onQuantityChange }) {
  const handleCheckboxChange = (index) => {
    const updated = [...items];
    updated[index].isSelected = !updated[index].isSelected;
    onSelectionChange(updated);
  };

  const total = items.reduce((sum, item) =>
    item.isSelected ? sum + item.price * quantity : sum, 0
  );

  return (
    <>
      <h2>Meal Selection</h2>
      <label>
        Quantity:
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
        />
      </label>
      <div className='item-wrapper'>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.isSelected}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>{item.name} - ${item.price}</span>
          </div>
        ))}
      </div>
      <h3>Total: ${total}</h3>
    </>
  );
}

export default MealSelection;
