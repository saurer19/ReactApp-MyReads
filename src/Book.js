import React, { Component } from "react";
import cover from './cover.jpg'
class Book extends Component {


  render() {
    const { book, onUpdate} = this.props;
    const imagevalidator = (book) => {
      if(! book.hasOwnProperty("imageLinks")){
      return cover
    }
    else{
      return book.imageLinks.thumbnail
    }
    }

    return (
      <li className="col s12 m6 l4 xl3 ">
        <div className="card hoverable">
          <div className="card-image">
            <img src={imagevalidator(book)} alt="book" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {book.title}
              <i className="material-icons right">more_vert</i>
            </span>
            <p>{book.authors}</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Move to...<i className="material-icons right">close</i>
            </span>
            <ul className="collection">
              <li
                onClick={() => { book.shelf==="currentlyReading" ?
                   console.log("Invalid Option.") :
                  onUpdate(book, "currentlyReading")    }}
                className={
                  "collection-item " +
                  (book.shelf === "currentlyReading" ? "active" : "")
                }
              >
                Currently Reading
              </li>
              <li
                onClick={() => { book.shelf==="wantToRead" ?
                   console.log("Invalid Option.") :
                  onUpdate(book,"wantToRead")    }}
                className={
                  "collection-item " + (book.shelf === "wantToRead" ? "active" : "")
                }
              >
                Want to Read
              </li>
              <li
                onClick={() => { book.shelf==="read" ?
                   console.log("Invalid Option.") :
                  onUpdate(book, "read")    }}

                className={
                  "collection-item " + (book.shelf === "read" ? "active" : "")
                }
              >
                Read
              </li>
              <li
                onClick={() => { book.shelf==="none" ?
                   console.log("Invalid Option.") :
                  onUpdate(book, "none")    }}
                className={"collection-item " + (book.shelf=== "none"  ? "active" : "")
              }>None</li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
