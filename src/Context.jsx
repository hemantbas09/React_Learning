import React, { useContext } from "react";
import { AppState } from "./App";
const Context = () => {
  const appData = useContext(AppState);

  return (
    <>
      <h1>{appData.count}</h1>
      <h1>{appData.data}</h1>
    </>
  );
};

export default Context;
