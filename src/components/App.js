import React from 'react';
import './app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './not-found';
import PlaylistHome from './playlists/playlists-index';
import AddPlaylistModal from './playlists/new-playlist/add-playlist';
import PlaylistItemDetails from './playlists/private/playlist-item-details';

function App() {
  return (
    <div>
      <section className="page-section cta">
      <div className="mt-4">
        <h3 className="text-center title">CollabYT</h3>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PlaylistHome} />
          <Route path="/playlists/:publicid" exact component={PlaylistItemDetails} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </section>
    <AddPlaylistModal />
    </div>
    
  );
}

export default App;
