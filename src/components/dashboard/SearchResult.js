import React, { Component } from 'react'
import axios from 'axios'

class SearchResult extends Component {
  state = {
    books: []
  }
  componentDidMount(){
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=MsaVAAcolptTFAWJtWcwAwKUKpyoqcwL')
      .then(res => {
        console.log(res.data.results.books);
        this.setState({
          books: res.data.results.books.slice(0,10)
        });
      })
  }
  render(){
    const { books } = this.state
    const bookList = books.length ? (
      books.map((book, index) => {
        return (
 
   
      <div className="book card" key={index}>

        <div className="card-image">
          <img src={book.book_image} alt="cover" />
         
        </div>
        <div className="card-content">
        <span className="card-title">{book.title}</span>
          <p>{book.description}</p>
        </div>
        <div className="card-action">
        <p>Author: {book.author}</p>
        </div>
      </div>
   
        )
      })
    ) : (
      <div className="center">No books to show</div>
    );

    return (
      <div>
        <div className="container">
          {bookList}
        </div>
      </div>
    )
  }
}


export default SearchResult