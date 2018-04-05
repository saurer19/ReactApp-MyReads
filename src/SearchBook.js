import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";
import * as BooksAPI from "./utils/BooksAPI";

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  state = {
    query: "",
    cbook: []
  };

  updateSearch = query => {
    this.setState(() => ({ query }));
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.length > 0) {
          books.map(book => {
            book.shelf = "none";
            for (let i = 0; i < this.props.books.length; i++) {
              if (book.id === this.props.books[i].id) {
                book.shelf = this.props.books[i].shelf;
              }
            }
          });
          this.setState(() => ({
            cbook: books,
            query: query
          }));
        } else {
          this.setState(() => ({
            cbook: []
          }));
        }
      });
    }
  };

  render() {
    const { query, cbook } = this.state;
    const { onUpdate } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s12">
              <Link to="/" className="material-icons prefix">
                backspace
              </Link>

              <input
                type="text"
                placeholder="Search Book"
                value={query}
                onChange={event =>
                  this.updateSearch(event.target.value.toLowerCase().trim())
                }
              />
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="row">
            {query === "" ? (
              <div>
                <h3>Please enter a text to search.</h3>
              </div>
            ) : (
              cbook.length > 0 &&
              cbook.map(book => (
                <Book book={book} onUpdate={onUpdate} key={book.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default SearchBook;
