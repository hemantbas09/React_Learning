import React from "react";

const Button = (props) => {
  return (
    <>
      <h1>Button</h1>
      <button className={props.className} onClick={props.action}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
