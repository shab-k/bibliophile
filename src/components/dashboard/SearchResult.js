import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import SearchBooks from './SearchBooks'
import axios from 'axios'

class SearchResult extends Component {
  state = {
    books: [],
    // articles:[],
    // searchTerm: '',
    // searchResults: []
    // ,
    // i: 0,
    // readingList: []
  }

  componentDidMount() {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=MsaVAAcolptTFAWJtWcwAwKUKpyoqcwL')
      .then(res => {
        console.log(res.data.results.books);
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
            <a href={book.amazon_product_url} rel="noopener noreferrer" target="_blank"> Buy From Amazon</a>
            
            <a href="#" className="btn-floating btn-small waves-effect waves-light blue darken-4 right"><i className="material-icons">add</i></a>
            <span className="add-button right">Add To List</span>
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


export default SearchResult