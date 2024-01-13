/* Breathing exercise animation component in React */
import React, { useState, useEffect } from 'react';
import './breathingComponent.css';

/* List of the steps */
const items = ['breathe in for 7 seconds', 'breathe out for 11 seconds', 'repeat for 12 to 15 repetitions', 'Done!'];

const BreathingComponent = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (animationStarted) {
      const interval = setInterval(() => {
        if (items.length > visibleItems.length) {
          setVisibleItems((prevVisibleItems) => [
            ...prevVisibleItems,
            items[prevVisibleItems.length],
          ]);
        } else {
          clearInterval(interval);
        }
      }, 1000); /* Length */

      return () => clearInterval(interval);
    }
  }, [animationStarted, visibleItems]);

  /* Signals the start of the exercise */
  const startAnimation = () => {
    setAnimationStarted(true);
  };

  return (
    <div>
      <ul className="list">
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={startAnimation}>click to start exercise</button>
    </div>
  );
};

export default BreathingComponent;
