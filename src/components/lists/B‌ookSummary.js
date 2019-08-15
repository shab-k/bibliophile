import React from 'react'

const BookSummary = ({book}) => {
  return (
    <div className="book card z-depth-0 book-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{book.title}</span>
        <p>{book.author}</p>
        
      </div>
    </div>
  )
}

export default BookSummary