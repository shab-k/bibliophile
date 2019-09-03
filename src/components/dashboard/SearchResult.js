import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { createAPIList } from '../../store/actions/APIListActions'


class SearchResult extends Component {
  state = {
    books: [],
    readingList: []
  }

  componentDidMount() {
    var config = require('../../config/config');
    var bookConfig = config.bookConfig.apiKey;

    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key= ' + bookConfig)
      .then(res => {
        // console.log(res.data.results.books);
        this.setState({
          books: res.data.results.books
          // .slice(0, 10)
        });
      })
  }

  render() {
    const { books } = this.state
    const bookList = books.length ? (
      books.map((book, index) => {
        return (
          <div className="book card small horizontal " key={index}>

            <div className="card-image">
              <img src={book.book_image} alt="cover" />
            </div>

            <div className="card-stacked">

              <div className="card-content">
                <span className="card-title">{book.title}</span>
                <p>{book.description}</p>

                <p><span className="author">Author: </span>{book.author}</p>
              </div>

              <div className="card-action">
                <a className="buy-link" href={book.amazon_product_url} rel="noopener noreferrer" target="_blank"> Buy From Amazon</a>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No books to show</div>
      );

    return (
      <div className="container">
        {bookList}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAPIList: (book) => dispatch(createAPIList(book))
  }
}

export default connect(null, mapDispatchToProps)(SearchResult, createAPIList)
