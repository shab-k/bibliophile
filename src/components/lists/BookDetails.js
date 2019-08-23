import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from "moment";
// import Moment from 'react-moment';

const BookDetails = (props) => {
  const { book } = props;
  
  if (book) {
    return (
      <div className="container section book-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{book.title}</span>
            <p>{book.author}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {book.authorFirstName} {book.authorLastName}</div>
            {/* <Moment><div>Created At {moment(book.startdate).format('MMMM Do YYYY')}</div></Moment> */}
            <p><span className="list-titles">Start Reading Date:</span> {moment(book.startdate.toDate().toString()).format('MMMM Do YYYY')}</p>
        <p><span className="list-titles">Finish Reading Date:</span> {moment(book.enddate.toDate().toString()).format('MMMM Do YYYY')}</p>
        
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