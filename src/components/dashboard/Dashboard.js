import React, { Component } from 'react'
// import SearchBooks from './SearchBooks'
import SearchResult from './SearchResult'
// import Chart from '../lists/Chart'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        {/* <SearchBooks /> */}
          <h4 className="dashboard-title center-align">NYTimes Best Sellers - Hardcover Fiction</h4>
          <SearchResult />
      </div>
    )
  }
}

export default Dashboard