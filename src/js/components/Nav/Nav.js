import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top top-nav">
        <Link to="/" className="navbar-brand">
          <img className="img-logo" src={logo} alt="30 Days of ES6+React" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" aria-hidden="true" />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/day-one" className="nav-link">
                Day 1 <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/day-two" className="nav-link">
                Day 2
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
