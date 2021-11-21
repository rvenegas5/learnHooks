import React, { useState } from "react";

const Reducer = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={() => {
        setCount(count + 1)
        setShowText(!showText)
      }}>
        Click Here
      </button>

      {showText && <p>You have {count} clicks</p>}
    </div>
  )
};

export default Reducer;
