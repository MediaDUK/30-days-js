import jquery from "jquery/dist/jquery.slim";
import Popper from "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/presentational/Header";
import DayOne from "./components/presentational/DayOne";
import DayTwo from "./components/presentational/DayTwo";

function Index() {
  return (
    <div className="container">
      <Header />
      <div className="card">
        {/* <img className="card-img-top"  alt="Card image cap"> */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
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

ReactDOM.render(<Index />, document.getElementById("app"));
