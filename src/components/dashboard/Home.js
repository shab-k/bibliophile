import React, { Component } from 'react'
import SearchResult from './SearchResult'

class Home extends Component {
  render() {
    return (
      <div className="home container">
          <h4 className="home-title center-align">NYTimes Best Sellers - Hardcover Fiction</h4>
          <SearchResult />
      </div>
    )
  }
}

export default Home