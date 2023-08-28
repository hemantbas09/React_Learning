import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 2;
  } else if (action.type === "DEC") {
    return state - 2;
  } else if (action.type === "MUL") {
    return state * 2;
  } else {
    return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
    </>
  );
};

export default Reducer;
