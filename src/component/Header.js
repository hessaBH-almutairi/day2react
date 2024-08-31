import React from "react";
import book from "../assest/image/book.jpeg";
const Header = ({ bookstorename }) => {
  return (
    <>
      <h1> welcome to {bookstorename} </h1>
      <img className="image" src={book} alt="BOOKSTORE" />
    </>
  );
};

export default Header;
