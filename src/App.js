import logo from "./logo.svg";
import "./App.css";
import "./assest/css/starter";
import book from "./assest/image";
import BookCard from "../component/bookcard";
import BookList from "./component/BookList";
function App() {
  /* 
  build -> write the code 
  extract -> data file , compnent
  refactor-> make code better
   */

  //which one i will put
  let bookstorename = "Bookstore";
  return (
    <div className="container">
      <div className="bookstore">
        <h1>{bookstore}</h1>
        <img className="image" src={book} alt="BOOKSTORE" />
      </div>

      <BookList />
    </div>
  );
}

export default App;
