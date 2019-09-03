import React from 'react'
import { Link } from 'react-router-dom'
import BookSummary from './B‌ookSummary'

const BookList = ({ books }) => {

  return (
    <div className="book-list section">
      {books && books.map(book => {
        return (
          <Link to={'/book/' + book.id} key={book.id}>
            <BookSummary book={book} key={book.id} />
          </Link>
        )
      })}
    </div>
  )
}


export default BookList