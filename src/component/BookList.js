import React from "react";
import books from "../assest/data/books";
import "../assest/css/starter.css";
import BookCard from "./bookcard";

const BookList = () => {
  // map throgh books send it to book card
  const displaybooks = books.map((book) => {
    return (
      <BookCard
        bookimage={book.image}
        booktitle={book.title}
        bookprice={book.price}
      />
    );
  });
  return <div className="bookcontainer">{displaybooks}</div>;
};

export default BookList;
