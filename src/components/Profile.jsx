import { useId, useState, useDebugValue } from "react";
export default function Profile() {
  const my1 = useId();
  const [isOnline, setOnline] = useState(true);
  useDebugValue(isOnline ? "Online" : "Offline");
  return (
    <>
      <h1>Hello 1 {my1}</h1>
    </>
  );
}
