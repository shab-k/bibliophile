import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBookList } from '../../store/actions/bookListActions'
import M from 'materialize-css'
import { DatePicker } from 'react-materialize'

class CreateBookList extends Component {

  state = {
    title: '',
    author: '',
    genre: '',
    startDate: '',
    endDate: ''
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleStartDateChange = (startDate) => {
    this.setState({
     startDate
    });

  }
  handleEndDateChange = (endDate) => {
    this.setState({
      endDate
    });

  }
  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state);
    this.props.createBookList(this.state);
    this.props.history.push('/dashboard');
  }

  componentDidMount() {
    var context = this;
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dateset');
      M.Datepicker.init(elems, {
        container: "body",
        onSelect: function (startDate) {
          context.setState({
            ...context.state.startDate,
            startDate: startDate

          })
          console.log(startDate); // Selected date is logged
        },
        autoClose: true
      });

    });
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.datepicker');
      M.Datepicker.init(elems, {
        container: "body",
        onSelect: function (endDate) {
          context.setState({
            ...context.state.endDate,
            endDate: endDate

          })
          console.log(endDate); // Selected date is logged
        },

        autoClose: true
      });

    });

  }

  render() {

    return (
      <div className="container">
        <form className="white add-book" onSubmit={this.handleSubmit}>
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
            <DatePicker id='startDate' onChange={this.handleStartDateChange}
            type="text" className="dateset" />
            <label htmlFor="startDate">Start Reading Date</label>
          </div>
          <div className="input-field">
            <DatePicker id='endDate' onChange={this.handleEndDateChange}
           type="text" className="datepicker" />
            <label htmlFor="endDate">Finish Reading Date</label>
          </div>

          <div className="input-field">
            <button className="btn indigo darken-4">Create</button>
          </div>
        </form>
      </div>

    )

  }

}

const mapDispatchToProps = dispatch => {
  return {
    createBookList: (book) => dispatch(createBookList(book))
  }
}

export default connect(null, mapDispatchToProps)(CreateBookList)