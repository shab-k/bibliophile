import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ReadingList extends Component {
  render(){
    const { books } = this.props;
    const bookList = books.length ? (
      books.map(book => {
        return (
          <div className="book card" key={book.id}>
            <div className="card-content">
              <Link to={'/' + book.id}>
                <span className="card-title red-text">{book.title}</span>
              </Link>
              <p>{book.author}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No books to show</div>
    );

    return (
      <div>
        <div className="container ReadingList">
          <h4 className="center">ReadingList</h4>
          {bookList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(ReadingList)