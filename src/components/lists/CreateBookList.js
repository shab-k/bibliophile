import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBookList } from '../../store/actions/bookListActions'
import M from 'materialize-css';

class CreateBookList extends Component {
  state = {
    title: '',
    author: '',
    genre: '',
    startdate: '',
    enddate: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createBookList(this.state)
  }
  
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var options = {}
      var instances = M.Datepicker.init(elems, options);
    });
}

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add A New Book</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <input type="text" id='author' onChange={this.handleChange} />
            <label htmlFor="author">Author</label>
          </div>
          <div className="input-field">
            <input type="text" id='genre' onChange={this.handleChange} />
            <label htmlFor="genre">Genre</label>
          </div>
          <div className="input-field">
            <input type="text" id='startdate' className="datepicker" onChange={this.handleChange} />
            <label htmlFor="startdate">Start Reading Date</label>
          </div>
          <div className="input-field">
            <input type="text" id='enddate' className="datepicker" onChange={this.handleChange} />
            <label htmlFor="enddate">End Reading Date</label>
          </div>
          
          
          <div className="input-field">
            <button className="btn indigo darken-4">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createBookList: (books) => dispatch(createBookList(books))
//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    createBookList: (book) => dispatch(createBookList(book))
  }
}

export default connect(null, mapDispatchToProps)(CreateBookList)