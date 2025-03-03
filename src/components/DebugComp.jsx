import { useState, useDebugValue } from "react";

function useCustomHook(initialValue) {
  const [value] = useState(initialValue);

  // Debug value for DevTools
  useDebugValue(value > 10 ? "Greater than 10" : "Less than 10");

  return value;
}

function Debug() {
  const number = useCustomHook(15);
  return <p>Number: {number}</p>;
}

export default Debug;
