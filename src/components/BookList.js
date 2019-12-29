import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <div className="book-list">
      <ul style={{ background: theme.syntax, color: theme.ui }}>
        {books.map(book => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
