import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const { toggleTheme } = value;
          return (
            <div>
              <button onClick={toggleTheme}>Dark Mode</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggle;
