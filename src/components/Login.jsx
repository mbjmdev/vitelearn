import React, { useState, useContext } from "react";
import { userContext } from "../context/userContext";
import Debug from "./DebugComp";
import MeasureComponent from "./MeasureComponent";
import Counter from "./Reducer";

const Login = () => {
  const { setUser } = useContext(userContext);

  // State variables
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState([]);

  // Event handlers
  const handleName = (event) => setName(event.target.value);
  const handleAge = (event) => setAge(event.target.value);

  // Handle Login
  const handleLogin = () => {
    let msgs = [];
    setError([]); // Reset errors before validation

    if (name.trim() === "") {
      msgs.push("Enter a name.");
    }

    if (age.trim() === "" || isNaN(age)) {
      msgs.push("Enter a valid age.");
    }

    if (msgs.length > 0) {
      setError(msgs);
    } else {
      setUser({ name, age });
      console.log("User logged in:", { name, age });
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleName}
        placeholder="Enter Name"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={handleAge}
        placeholder="Enter Age"
      />
      <button onClick={handleLogin}>Login Now</button>

      {/* Display error messages */}
      {error.length > 0 &&
        error.map((msg, index) => (
          <p key={index} style={{ color: "red" }}>
            {msg}
          </p>
        ))}

      <Debug />
      <MeasureComponent />
      <Counter />
    </div>
  );
};

export default Login;
