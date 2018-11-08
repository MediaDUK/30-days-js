import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/container/Nav/Nav";

const app = document.getElementById("app");
// import Header from "./components/presentational/Header";
// import DayOne from "./components/presentational/DayOne";
// import DayTwo from "./components/presentational/DayTwo";

function Index() {
  return <Nav />;
}

if (app) {
  ReactDOM.render(<Index />, app);
}
