import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import Logout from "./Logout";

const Home = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      <Logout />
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};

export default Home;
