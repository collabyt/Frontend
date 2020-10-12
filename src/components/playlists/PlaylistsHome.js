import React, { useState, useEffect } from "react";
import playlistStore from "../../stores/playlistStore";
import PlaylistItems from "./PlaylistItems";
import { loadPlaylists } from "../../actions/playlistActions";

function PlaylistHome() {
  const [playlists, setPlaylists] = useState(playlistStore.getPlaylists());

  useEffect(() => {
    playlistStore.addChangeListener(onChange);
    if (playlistStore.getPlaylists.length === 0) loadPlaylists();
    return () => playlistStore.removeChangeListener(onChange); // cleanup on unmount
  }, []);

  function onChange() {
    setPlaylists(playlistStore.getPlaylists());
  }

  return (
    <>
      {
        playlists ? <PlaylistItems playlists={playlists} /> : <div></div>
      }
    </>
  );
}

export default PlaylistHome;
