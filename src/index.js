import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/styles.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
