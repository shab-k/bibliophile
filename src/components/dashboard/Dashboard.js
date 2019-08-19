import React, { Component } from 'react'
import BookList from '../lists/BookList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Chart from '../lists/Chart';

class Dashboard extends Component {
    constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets:[
          {
            label:'Number',
            data:[1,5,3,4,2,1,2,1,0,3,1,2],
          
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ]
          }
        ]
      }
    });
    // console.log(this.state.chartData.datasets[0].data);
    // console.log(this.state.chartData.labels);
  }
  
  render() {
    
    // console.log(this.props);
    const { books } = this.props;
    
    return (
      <div className="dashboard container">
      
        <div className="row">
        <h4>Reading List</h4>
          <div className="col s12 m6">
            <BookList books={books} />
          </div>
          <h4 className="chart-title">Reading Tracker</h4>
          <div className="col s12 m5 offset-m1 white">
          
           <Chart chartData={this.state.chartData} legendPosition="bottom" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    books: state.firestore.ordered.books
  }
}



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' }
  ])
)(Dashboard)