import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from './Book';
import PropTypes from "prop-types";

class Dashboard extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
      <nav>
        <div className="nav-wrapper green">
          <Link to="/" className="brand-logo center">
            MyReads
          </Link>
        </div>
      </nav>
      <div className="container">

        <h3 className="title">Currently Reading</h3>
        <ul className="row">

          {this.props.books.filter(book=>{return book.shelf==="currentlyReading"}).map(book => (
            <Book book={book} onUpdate={this.props.onUpdate}
              key={book.id}
            />
          ))}

        </ul>

        <h3 className="title">Want to Read</h3>
        <ul className="row">

          {this.props.books.filter(book=>{return book.shelf==="wantToRead"}).map(book => (
            <Book book={book}
              onUpdate={this.props.onUpdate}
              key={book.id}
            />
          ))}

        </ul>

        <h3 className="title">Read</h3>
        <ul className="row">

          {this.props.books.filter(book=>{return book.shelf==="read"}).map(book => (
            <Book book={book}
              onUpdate={this.props.onUpdate}
              key={book.id}
            />
          ))}

        </ul>
        <div className="fixed-action-btn">
          <Link to="/search" className="btn-floating btn-large green pulse">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}
export default Dashboard;
