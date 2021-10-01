import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("...");

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const updateText = (event) => {
    const text = event.target.value;
    setInputText(text)
  };

  return (
    <div className="container-state">
      <div>
        <h2 className="title">useState Hook with a Counter</h2>
        <h4>{counter}</h4>
        <button className="btn-click sub-title" onClick={updateCounter}>
          Click me!
        </button>
      </div>
      <div>
        <h2 className="title">useState Hook with a Input text</h2>
        <input className="input-text" placeholder="enter something..." onChange={updateText} />
        <h4>{inputText}</h4>
      </div>
    </div>
  );
};

export default State;
