import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, dark, light } = this.context;
    const theme = isLightTheme ? dark : light;
    return (
      <div className="book-list">
        <ul style={{ background: theme.syntax, color: theme.ui }}>
          <li>Game of Thrones</li>
          <li>Game of Thrones</li>
          <li>Game of Thrones</li>
          <li>Game of Thrones</li>
          <li>Game of Thrones</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
