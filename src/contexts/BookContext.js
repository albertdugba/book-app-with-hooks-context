import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    {
      title: "Game of Thrones",
      author: "Christopher Marwins",
      id: Math.random(Math.floor * 100 + 12)
    },
    {
      title: "Lion King",
      author: "Luthor Jims",
      id: Math.random(Math.floor * 100 + 12)
    },
    {
      title: "Harry Porter",
      author: "Kims Clark",
      id: Math.random(Math.floor * 100 + 12)
    }
  ]);

  const { children } = props;

  const addBook = (title, author) => {
    setBooks([
      ...books,
      { title, author, id: Math.random(Math.floor * 100 + 12) }
    ]);
  };

  const deleteBook = id => {
    setBooks(books.filter(book => id !== book.id));
  };

  return (
    <BookContext.Provider
      value={{ books, addBook: addBook, deleteBook: deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
