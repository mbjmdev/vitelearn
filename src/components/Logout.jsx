import React, { useState, useContext } from "react";
import { userContext } from "../context/userContext";

const Logout = () => {
  const { user, setUser } = useContext(userContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div>
      <button onClick={handleLogout}>Log me out!!!</button>
    </div>
  );
};

export default Logout;
