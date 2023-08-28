import React, { useMemo, useState } from "react";

const Memo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };
  const IncrementTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <>
      <button onClick={IncrementOne}>CounterOne-{countOne}</button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <button onClick={IncrementTwo}>CounterTwo-{countTwo}</button>
    </>
  );
};

export default Memo;
