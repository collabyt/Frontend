import React from "react";
import "./App.css";
import AboutPage from "./AboutPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import PlaylistHome from "./playlists/PlaylistsHome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleUp, faPlus } from "@fortawesome/free-solid-svg-icons";
 
// Add the icons into the library of the project
library.add(fab, faAngleDown, faAngleUp, faPlus)


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
