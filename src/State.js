import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container-state">
      <h2 className="title">useState Hook with a Counter</h2>
      <h4>{counter}</h4>
      <button className="btn-click sub-title" onClick={updateCounter}>
        Click me!
      </button>
    </div>
  );
};

export default State;
