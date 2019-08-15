import React from 'react'

const BookSummary = ({book}) => {
  return (
    <div className="book card z-depth-0 book-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title ">Title: {book.title}</h5>
        <p><span className="list-titles">Author:</span> {book.author}</p>
        <p><span className="list-titles">Genre:</span> {book.genre}</p>
        <p><span className="list-titles">Start Reading Date:</span> {book.startdate}</p>
        <p><span className="list-titles">End Reading Date:</span> {book.enddate}</p>
        
      </div>
    </div>
  )
}

export default BookSummary