import React, { Component } from 'react'
import SearchBooks from './SearchBooks'
import SearchResult from './SearchResult'
import Chart from '../lists/Chart'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SearchBooks />
            <SearchResult />
          </div>
          <div className="col s12 m5 offset-m1">
          <Chart />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard