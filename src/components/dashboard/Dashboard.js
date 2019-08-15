import React, { Component } from 'react'
import BookList from '../lists/BookList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { books } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BookList books={books} />
          </div>
          <div className="col s12 m5 offset-m1">
           
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    books: state.firestore.ordered.books
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' }
  ])
)(Dashboard)