import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/presentational/Header";
import DayOne from "./components/presentational/DayOne";
import DayTwo from "./components/presentational/DayTwo";

// images
import png from "../img/30days-es6-react.png";


export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <main>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/day-one">Day 1</Link>
              <Link to="/day-two">Day 2</Link>
            </nav>
            <Route exact path="/" />
            <Route path="/day-one" component={DayOne} />
            <Route path="/day-two" component={DayTwo} />
          </main>
        </Router>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("app"));
