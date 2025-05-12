import React, { useState } from 'react';
import Item from './item.jsx';
import TotalCalculation from './total.jsx';
import MealSelection from './mealSelection.jsx';
import Summary from './summary.jsx';
import './App.css'; // Assuming you have styles here
import AboutUs from "./AboutUS.jsx";

function App() {
  const [venueItems, setVenueItems] = useState([
    { name: "Conf Room", price: 1500, quantity: 0 },
    { name: "Hall", price: 5500, quantity: 0 },
    { name: "Meeting Room", price: 1000, quantity: 0 },
    { name: "Lecture Hall", price: 2000, quantity: 0 }
  ]);
  const [addOns, setAddOns] = useState([
    { name: "Speaker", price: 100, quantity: 0 },
    { name: "Microphone", price: 75, quantity: 0 },
    { name: "Projector", price: 40, quantity: 0 },
    { name: "Whiteboard", price: 20, quantity: 0 }
  ]);
  const [mealS, setMealS] = useState([
    { name: "breakfast", price: 50, isSelected: false },
    { name: "water", price: 20, isSelected: false },
    { name: "meal", price: 65, isSelected: false },
    { name: "ice cream", price: 15, isSelected: false }
  ]);
  const [mealSelections, setMealSelections] = useState(mealS);
  const [mealQuantity, setMealQuantity] = useState(0);

  const [activeTab, setActiveTab] = useState("venue");

  const updateQuantity = (type, index, change) => {
    const update = (items, setItems) => {
      const updated = [...items];
      updated[index].quantity += change;
      if (updated[index].quantity < 0) updated[index].quantity = 0;
      setItems(updated);
    };
    if (type === "venue") update(venueItems, setVenueItems);
    else if (type === "addOn") update(addOns, setAddOns);
  };
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <>
      {!showVenue? 
      <header className="first_page">
        <div className="main_event">
          <div className="first_page_name_btn">
            <h1 className="budget_heading">Conference Expense Planner</h1>
            <p className="budget_sentence"> Plan your next major event with us!</p>
            <div className="getstarted_btn">
              <button onClick={() => handleGetStarted()} className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>:
      <div className='second_page'>
        {/* Navigation Bar */}
        <nav className="navbar">
          <span onClick={() => setActiveTab("venue")}>Venues</span>
          <span onClick={() => setActiveTab("addons")}>Add-Ons</span>
          <span onClick={() => setActiveTab("meals")}>Meals</span>
          <span onClick={() => setActiveTab("summary")}>Summary</span>
        </nav>

        {/* Sections */}
        {activeTab === "summary" ? (
          <div className="content">
            <Summary
              venues={venueItems}
              addOns={addOns}
              meals={mealSelections}
              mealQuantity={mealQuantity}
            />
          </div>
        ) : (
          <div className="content">
            {activeTab === "venue" && (
              <>
                <h2>Venues</h2>
                <Item items={venueItems} onQuantityChange={(i, c) => updateQuantity("venue", i, c)} />
                <TotalCalculation items={venueItems} />
              </>
            )}

            {activeTab === "addons" && (
              <>
                <h2>Add-Ons</h2>
                <Item items={addOns} onQuantityChange={(i, c) => updateQuantity("addOn", i, c)} />
                <TotalCalculation items={addOns} />
              </>
            )}

            {activeTab === "meals" && (
              <>
                <h2>Meal Preparation</h2>
                <MealSelection
                  items={mealSelections}
                  onSelectionChange={setMealSelections}
                  quantity={mealQuantity}
                  onQuantityChange={setMealQuantity}
                />
              </>
            )}
          </div>
        )}
      </div>}
    </>
    
  );
}

export default App;
