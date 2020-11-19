import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import PlaylistHome from './playlists/PlaylistsHome';

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
    </section>
  );
}

export default App;
