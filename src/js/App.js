import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Pages/Home";
import DayOne from "./components/Pages/DayOne";
import DayTwo from "./components/Pages/DayTwo";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <section>
          {/* <Router> */}
          <Switch>
            {/* <Route path="/day-one" render={props => <DayOne {...props} />} />
              <Route path="/day-two" render={props => <DayTwo {...props} />} />
              <Route path="/" render={props => <Home {...props} />} /> */}
            <Route path="/day-one" component={DayOne} />
            <Route path="/day-two" component={DayTwo} />
            <Route path="/" component={Home} />
          </Switch>
          {/* </Router> */}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
