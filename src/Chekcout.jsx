import React from "react";
import Button from "./Button";

const Chekcout = () => {
  const checkout = () => {
    alert("This is Checkout");
  };
  return (
    <>
      <Button title="pay" className="btn" action={checkout} />
    </>
  );
};

export default Chekcout;
