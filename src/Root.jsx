import { useState } from "react";
import { userContext } from "./context/userContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Profile from "./components/Profile";

export default function Root() {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Show Dashboard if user exists, otherwise show Login */}
          <Route path="/" element={user.name ? <Dashboard /> : <Login />} />
          <Route
            path="/dashboard"
            element={user.name ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user.name ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user.name ? <Navigate to="/dashboard" /> : <Login />}
          />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}
