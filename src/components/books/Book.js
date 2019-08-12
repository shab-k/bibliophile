import React, { Component } from 'react'
import axios from 'axios'

class Book extends Component {
  state = {
    book: null
  }
  componentDidMount(){
    let id = this.props.match.params.book_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          book: res.data
        });
        console.log(res.data);
      });
  }
  render() {

    const book = this.state.book ? (
      <div className="book">
        <h4 className="center">{this.state.book.title}</h4>
        <p>{this.state.book.body}</p>
      </div>
    ) : (
      <div className="center">Loading book...</div>
    );

    return (
      <div className="container">
        {book}
      </div>
    )
  }
}

export default Book