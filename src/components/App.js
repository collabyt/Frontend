import React from "react";
import AboutPage from "./AboutPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import PlaylistHome from "./playlists/PlaylistsHome";
import "./App.css";

function App() {
  return (
    <section className="page-section cta">
        <h3 className="text-center title">CollabYT</h3>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={PlaylistHome} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </section>
  );
}

export default App;
