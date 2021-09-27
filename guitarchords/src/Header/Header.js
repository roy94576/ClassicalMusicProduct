import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Header extends Component {
  render() {


    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-purple bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Classical Music Streaming</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/register" className="nav-link" >Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Classes" className="nav-link">Classes</Link>
              </li>
              <li className="nav-item">
                <Link to="/Events" className="nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contacts" className="nav-link">Contacts</Link>
              </li>
              <li className="nav-item">
                <Link to="/AddClass" className="nav-link">AddClass</Link>
              </li>
              <li className="nav-item">
                <Link to="/ViewClass" className="nav-link">ViewClass</Link>
              </li>
              <li className="nav-item">
                <Link to="/Logout" className="nav-link">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header