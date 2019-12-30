import React, { useReducer, createContext } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);

  const { children } = props;

  //   const addBook = (title, author) => {
  //     setBooks([
  //       ...books,
  //       { title, author, id: Math.random(Math.floor * 100 + 12) }
  //     ]);
  //   };

  //   const deleteBook = id => {
  //     setBooks(books.filter(book => id !== book.id));
  //   };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
