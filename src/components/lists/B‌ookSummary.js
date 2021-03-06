import React from 'react'

const BookSummary = ({ book }) => {

  return (
    <div className="book card z-depth-0 book-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">{book.title}</h5>
        <p className="details">Details <i className="fas fa-long-arrow-alt-right"></i></p>

      </div>
    </div>
  )
}

export default BookSummary