import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([
    { title: "Smallville", id: 20 },
    { title: "Avengers", id: 21 }
  ]);

  return (
    <MovieContext.Provider value={{ movies }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
