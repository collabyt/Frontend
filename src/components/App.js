import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './not-found';
import PlaylistHome from './playlists/playlists-index';
import AddPlaylistModal from './playlists/new-playlist/add-playlist';

function App() {
  return (
    <div>
      <section className="page-section cta">
      <div className="mt-4">
        <h3 className="text-center title">CollabYT</h3>
      </div>
      <Switch>
        <Route path="/" exact component={PlaylistHome} />
        <Route component={NotFoundPage} />
      </Switch>
    </section>
    <AddPlaylistModal />
    </div>
    
  );
}

export default App;
