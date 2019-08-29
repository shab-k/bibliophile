import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { createAPIList } from '../../store/actions/APIListActions'


class SearchResult extends Component {
  state = {
    books: [],
    readingList: [],
    // title: '',
    // author: '',
    // genre: ''
  }
  
  // handleReadingClick = (e) => {
  //   e.preventDefault();
  //   const i = this.state.books.forEach((book, index) => {
  //     return index
      
  //   });
  //   console.log(i, this.state.books[i]);
  //   // console.log(this.state.books);
  //   // console.log(this.state.books.map(book => book.title));
  //   // this.props.createAPIList(this.state);
  //   // this.props.createAPIList(this.state.books.map(book => book.title));
  //   // this.props.history.push('/dashboard');
  // }

  componentDidMount() {
    var config = require('../../config/config');
    var bookConfig = config.bookConfig.apiKey;
    
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key= '+bookConfig)
      .then(res => {
        // console.log(res.data.results.books);
        this.setState({
          books: res.data.results.books
          // .slice(0, 10)
        });
      })
  }
  // fetchArticles= () => {
  //   let term=this.state.searchTerm;
  //   axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=MsaVAAcolptTFAWJtWcwAwKUKpyoqcwL`)
  //   .then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       articles: res.data
  //     })
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   })
  // }
  // handleSearchSubmit=(e) => {
  //   e.preventDefault();
  //   this.fetchArticles();
  // }
  // handleChange = (e) => {
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }
  // handleReadingClick = (e) => {
  //   let allBooks = this.state.books
  //   let currentReadingList = this.state.readingList
  //   let eventId=e.target.parentElement.parentElement.id
  //   let book = allBooks.find((eachBook)=> {
  //     return eachBook._id === eventId
  //   })
  //   let newState = [...currentReadingList, book]
  //   this.setState({readingList: newState})
  //   console.log(this.state.readingList)
  // }
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
            {/* <button onClick={this.handleReadingClick}>
              Add to list
            </button> */}
            {/* <a href="#" className="btn-floating btn-small waves-effect waves-light blue darken-4 right" onReadingClick={this.handleReadingClick}><i className="material-icons">add</i></a>
            <span className="add-button right">Add To List</span> */}
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
// export default SearchResult