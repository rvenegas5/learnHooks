import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {count: state.count + 1, showText: state.showText}
      case "toogleShowText":
        return {count: state.count, showText: !state.showText }
      default:
        return state
    }  
  }

  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  return (
    <div>
      <h2 className="title">useState Hook with a Counter</h2>
      <h4>{ state.count }</h4>
      <button 
      className="btn-click sub-title"
      onClick={() => {
        dispatch({type: "INCREMENT"})
        dispatch({type: "toogleShowText"})
      }}>
        Click Here
      </button>

      { state.showText && <p>This is a text</p>}
    </div>
  )
};

export default Reducer;
