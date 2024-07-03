import React from "react";

const ComponentC = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
      {/* <p>Count: {count}</p> */}
    </div>
  );
};

export default ComponentC;
