import jquery from "jquery/dist/jquery.slim";
import Popper from "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const app = document.getElementById("app");

if (app) {
  ReactDOM.render(
    // BrowserRouter passes history obj down the component tree
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    app
  );
}
