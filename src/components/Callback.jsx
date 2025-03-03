import { useState, useCallback } from "react";

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click me</button>;
}

function ButtonTwo({ handleClick }) {
  return <button onClick={handleClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={memoizedClick} />
      <ButtonTwo handleClick={memoizedClick} />
    </div>
  );
}

export default App;
