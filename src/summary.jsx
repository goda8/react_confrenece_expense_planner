// Summary.jsx
import React from 'react';

function Summary({ venues, addOns, meals, mealQuantity }) {
  // Filter selected meal items and calculate quantity
  const mealItems = meals
    .filter(item => item.isSelected)
    .map(item => ({
      name: item.name,
      quantity: mealQuantity,
      price: item.price
    }));

  // Combine all selected items from all sources
  const allItems = [
    ...venues,
    ...addOns,
    ...mealItems
  ].filter(item => item.quantity > 0);

  const total = allItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h2>Summary</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {allItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Grand Total: ${total}</h3>
    </div>
  );
}

export default Summary;
