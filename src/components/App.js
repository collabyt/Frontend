import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PlaylistHome from "./playlists/PlaylistsHome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddPlaylistModal from "./playlists/AddPlaylist";
 
// Add the icons into the library of the project
library.add(fab, faAngleDown, faAngleUp, faPlus)


function App() {
  return (
    <section className="page-section cta">
      <div className="mt-4">
        <h3 className="text-center title">CollabYT</h3>
      </div>
      <Switch>
        <Route path="/" exact component={PlaylistHome} />
        <Route component={NotFoundPage} />
      </Switch>
      <AddPlaylistModal></AddPlaylistModal>
    </section>
  );
}

export default App;
