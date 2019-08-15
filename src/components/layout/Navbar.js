import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo darken-4">
      <div className="container">
        <span className="logo-icon"><i className="fas fa-book"></i></span>
        <Link className="brand-logo" to="/">Bibliophile</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          {/* <li><NavLink to='/book-list'>Book List</NavLink></li> */}
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          <li><NavLink to='/create'>New List</NavLink></li>
        </ul>
      </div>
    </nav> 
    
  )
}

export default Navbar