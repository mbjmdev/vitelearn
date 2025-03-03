import { useState, useMemo } from "react";

function ExpensiveComponent({ number }) {
  const squaredNumber = useMemo(() => {
    console.log("Calculating squares...");
    return number * number;
  }, [number]);

  return <p>Squared Value: {squaredNumber}</p>;
}

export default ExpensiveComponent;
