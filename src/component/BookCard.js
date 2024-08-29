import React from "react";
import "../assest/css/starter.css";

const BookCard = ({ bookimage, booktitle, bookprice }) => {
  return (
    <div className="secondline">
      <div className="bookcontainer">
        <img className="image" src={bookimage} />
        <h3>{booktitle}</h3>
        <p>price: {bookprice}</p>
      </div>
    </div>
  );
};

export default BookCard;
