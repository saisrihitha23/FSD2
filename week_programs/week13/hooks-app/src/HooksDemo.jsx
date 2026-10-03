import React, { useState } from "react";

function HooksDemo() {
  // useState creates a state variable
  const [count, setCount] = useState(0);

  // Event to increase state
  const increase = () => {
    setCount(count + 1);
  };

  // Event to decrease state
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="hooks-demo">
      <h2>🚀 Understanding React Hooks</h2>

      {/* Display state */}
      <h3>🌌 Mission Count: {count}</h3>

      {/* Events */}
      <button onClick={increase}>🚀 Launch</button>
      <button onClick={decrease}>🛬 Return</button>
    </div>
  );
}

export default HooksDemo;