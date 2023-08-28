import React from "react";
import Button from "./Button";
const Home = () => {
  const addPerson = () => {
    alert("My Name is Hemant Basnet");
  };
  return (
    <>
      <div>Home</div>
      <Button title="Click Me" className="button" action={addPerson} />
    </>
  );
};

export default Home;
