import dispatcher from "../appDispatcher";
import * as playlistsApi from "../api/playlistsApi";
import actionTypes from "./actionTypes";

export function savePlaylist(playlist) {
  return playlistsApi.savePlaylist(playlist).then(savedPlaylist => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: playlist.id
        ? actionTypes.UPDATE_PLAYLIST
        : actionTypes.CREATE_PLAYLIST,
      playlist: savedPlaylist
    });
  });
}

export function loadPlaylists() {
  return playlistsApi.getPlaylists().then(playlists => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PLAYLISTS,
      playlists: playlists
    });
  });
}

