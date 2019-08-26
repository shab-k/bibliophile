import React from 'react'
import moment from "moment";

const BookSummary = ({ book }) => {
  
  console.log(moment(book.endDate.toDate().toString()).format('MMMM Do YYYY'));
  return (
    <div className="book card z-depth-0 book-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">Title: {book.title}</h5>
        <p className="details">Details <i className="fas fa-long-arrow-alt-right"></i></p>
        
      </div>
    </div>
  )
}

export default BookSummary