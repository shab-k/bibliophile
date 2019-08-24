import React from 'react'
import moment from "moment";
// import Moment from 'react-moment';

const BookSummary = ({ book }) => {
  
  console.log(moment(book.endDate.toDate().toString()).format('MMMM Do YYYY'));
  return (
    <div className="book card z-depth-0 book-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title ">Title: {book.title}</h5>
        <p>Details</p>
        {/* <p><span className="list-titles">Author:</span> {book.author}</p>
        <p><span className="list-titles">Genre:</span> {book.genre}</p> */}
        {/* <p><span className="list-titles">Start Reading Date:</span> {moment(book.startDate.toDate().toString()).format('MMMM Do YYYY')}</p>
        <p><span className="list-titles">Finish Reading Date:</span> {moment(book.endDate.toDate().toString()).format('MMMM Do YYYY')}</p> */}
        
      </div>
    </div>
  )
}

export default BookSummary