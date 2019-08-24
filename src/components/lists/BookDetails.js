import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from "moment";


const BookDetails = (props) => {
  const { book } = props;
  
  if (book) {
    return (
      <div className="container section book-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{book.title}</span>
            <p><span className="list-titles">Author:</span> {book.author}</p>
            <p><span className="list-titles">Genre:</span> {book.genre}</p>
       
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p><span className="list-titles">Start Reading Date:</span> {moment(book.startDate.toDate().toString()).format('MMMM Do YYYY')}</p>
            <p><span className="list-titles">Finish Reading Date:</span> {moment(book.endDate.toDate().toString()).format('MMMM Do YYYY')}</p>
        
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading book...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const books = state.firestore.data.books;
  const book = books ? books[id] : null
  return {
    book: book
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'books'
  }])
)(BookDetails)