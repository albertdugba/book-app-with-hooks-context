import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="book-form">
        <input
          type="text"
          required
          placeholder="Enter a book"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Enter an author"
          onChange={e => setAuthor(e.target.value)}
        />
      </label>

      <input type="submit" value="Add" />
    </form>
  );
};

export default NewBookForm;
