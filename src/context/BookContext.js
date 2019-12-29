import React, { useState, createContext } from "react";
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Game of Thrones", id: 1 },
    { title: "The Flash ", id: 2 },
    { title: "Merlin", id: 3 }
  ]);

  const { children } = props;
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
