// src/App.js
import React, { useState } from "react";

function App() {
  const [toppings, setToppings] = useState(["Cheese"]);
  const [isPepperoniChecked, setIsPepperoniChecked] = useState(false);

  const handlePepperoniChange = () => {
    // Toggle the pepperoni checkbox state
    setIsPepperoniChecked(prevState => {
      const newState = !prevState;
      if (newState) {
        setToppings(prevToppings => [...prevToppings, "Pepperoni"]);
      } else {
        setToppings(prevToppings => prevToppings.filter(topping => topping !== "Pepperoni"));
      }
      return newState;
    });
  };

  return (
    <div>
      <h1>Pizza Order</h1>
      <div>
        <label>
          <input
            type="checkbox"
            name="add pepperoni"
            checked={isPepperoniChecked}
            onChange={handlePepperoniChange}
          />
          Add Pepperoni
        </label>
      </div>

      <h2>Toppings:</h2>
      <ul>
        {toppings.map(topping => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;