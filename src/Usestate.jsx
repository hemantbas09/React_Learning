import React, { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="useState">
        <h1>{count}</h1>
        <button className="btn" onClick={increase}>
          Increase
        </button>
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
      </div>
    </>
  );
};

export default Usestate;
