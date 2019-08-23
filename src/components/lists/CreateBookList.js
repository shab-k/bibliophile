import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBookList } from '../../store/actions/bookListActions'
import M from 'materialize-css';
// import moment from "moment";
import { DatePicker } from 'react-materialize';


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
  // handleDateChange(e){
    
  //   this.setState({
  //     // startDate: { ...this.state.startDate, date: e.select }
  //     startdate: this.state.date
  //   })
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createBookList(this.state);
    this.props.history.push('/dashboard');
  }
//   handleSelect = (enddate) =>{
//     let context = this;
//     context.setState({
//       enddate: enddate
//     })
// console.log(enddate); 
//   }
  
  componentDidMount() {
    var context = this;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dateset');
      M.Datepicker.init(elems, {
        // defaultDate: new Date(),
        // format: this.state.format,
        container: "body",
        onSelect: function(startdate) {
          context.setState({
              ...context.state.startdate,
              startdate: startdate
          
              })
          console.log(startdate); // Selected date is logged
        },
       
        autoClose: true
      });
    
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      M.Datepicker.init(elems, {
        // defaultDate: new Date(),
        // format: this.state.format,
        container: "body",
        onSelect: function(enddate) {
          context.setState({
              ...context.state.enddate,
              enddate: enddate
          
              })
          console.log(enddate); // Selected date is logged
        },
       
        autoClose: true
      });
    
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
            <DatePicker id="startdate" type="text" className="dateset"  />
            <label htmlFor="startdate">Start Reading Date</label>
          </div>
          <div className="input-field">
            <DatePicker id="enddate" type="text" className="datepicker" />
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