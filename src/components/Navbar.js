import { ThemeContext } from "../context/ThemeContext";
import React, { Component } from "react";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../context/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          const { isAuthenticated, toggleAuth } = authContext;
          console.log(isAuthenticated);
          return (
            <ThemeContext.Consumer>
              {value => {
                const { isLightTheme, light, dark } = value;
                const theme = isLightTheme ? light : dark;
                return (
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
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
