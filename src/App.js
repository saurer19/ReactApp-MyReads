import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import SearchBook from "./SearchBook";
import * as BooksAPI from "./utils/BooksAPI";

class App extends Component {
  state = {
    books: [],
  };
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState(() => ({books}))
    })
  }

  Update = (book, shelf) => {

    let cbooks= this.state.books
    if (book.shelf === "none") {
      cbooks.push(book)
    }
    cbooks[cbooks.indexOf(book)].shelf = shelf
    this.setState({books:cbooks})
    BooksAPI.update(book, shelf)
    .then(books =>
      console.log(books)
    )
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Dashboard onUpdate={this.Update} books={this.state.books}
 />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              onUpdate={this.Update}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
