import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ThemeToggle />
        <div onClick={toggleAuth}>
          {" "}
          {isAuthenticated ? "Logged In" : "Logged out"}
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
