import React from "react";
import BookList from "./BookList";
import Header from "./Header";
import "../assest/css/starter.css";

const Home = () => {
  return (
    <div className="container">
      <Header bookstorename={"BOOK STORE"} />
      <BookList />
    </div>
  );
};

export default Home;
