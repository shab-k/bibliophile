import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import M from 'materialize-css';

class Navbar extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }
  render(){ 
  return (
    <nav className="nav-wrapper indigo darken-4">
      <div className="container">
      <a href="#" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
      </a>

        <span className="logo-icon left hide-on-med-and-down"><i className="fas fa-book"></i></span>
        <Link className="brand-logo left hide-on-med-and-down" to="/">Bibliophile</Link>
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          <li><NavLink to='/create'>New List</NavLink></li>
        </ul>
        {/* Inside Hamburger Menu */}
         <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/dashboard" exact>Dashboard</NavLink></li>
          <li><NavLink to="/create" exact>New List</NavLink></li>
        </ul>
      </div>
    </nav> 
    
  )
}
}
export default Navbar