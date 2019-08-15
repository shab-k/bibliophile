import React, { Component } from 'react'
// import SearchBooks from './SearchBooks'
import SearchResult from './SearchResult'

class Home extends Component {
  render() {
    return (
      <div className="home container">
        {/* <SearchBooks /> */}
          <h4 className="home-title center-align">NYTimes Best Sellers - Hardcover Fiction</h4>
          <SearchResult />
      </div>
    )
  }
}

export default Home