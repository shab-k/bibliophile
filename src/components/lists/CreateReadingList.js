import React, { Component } from 'react'

class CreateReadingList extends Component {
  state = {
    title: '',
    author: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add A New Book</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Author</label>
          </div>
          <div className="input-field">
            <button className="btn indigo darken-4">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateReadingList