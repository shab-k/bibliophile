import React from 'react'

const Book = ({book, onReadingClick}) => {
  return(
  <div className="card" id={book._id}>
  <div className="content">
  <div className="header"><a href={book.web_url}>{book.title}</a></div>
  <div className="description">{book.description}</div>
  <br />
  <button className="ui button" onClick={onReadingClick}>Add to Reading List</button>
  </div>
  </div>
)
}

export default Book
