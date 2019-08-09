import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo darken-4">
      <div className="container">
        <Link className="brand-logo" to="/">Bibliophile</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/reading-list'>Reading List</NavLink></li>
          <li><NavLink to='/create-list'>Create List</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar