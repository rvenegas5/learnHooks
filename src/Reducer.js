import React, { useState } from "react";

const Reducer = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="container-state">
      <h2 className="title">useReducer with a Counter and a Text</h2>
      <h4>{counter}</h4>
      <button className="btn-click sub-title">Click Here!</button>
      ()
    </div>
  )
};

export default Reducer;
