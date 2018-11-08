import jquery from "jquery/dist/jquery.slim";
import Popper from "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.min.css";
import React, { Component } from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../../../../img/logo.png";

class Nav extends Component {
  render() {
    return (
      // <Router>
      //   <main>
      //     <nav>
      //       <Link to="/">Home</Link>
      //       <Link to="/day-one">Day 1</Link>
      //       <Link to="/day-two">Day 2</Link>
      //     </nav>
      //     <Route exact path="/" />
      //     <Route path="/day-one" component={DayOne} />
      //     <Route path="/day-two" component={DayTwo} />
      //   </main>
      // </Router>
      <nav className="navbar navbar-expand-md fixed-top top-nav">
        <a className="navbar-brand" href="#">
          <img className="img-logo" src={logo} alt="30 Days of ES6+React" />
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Day 1 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Day 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Day 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Day 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Day 5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Day 6
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Day 7
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
