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

export function getPlaylistById(playlistId) {
  return playlistsApi.getPlaylistById(playlistId).then(playlist => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_PLAYLIST_BY_ID,
      playlist: playlist
    });
  });
}

export function addNewVideoPlaylist(playlistId, video) {
  return playlistsApi.addNewVideoPlaylist(playlistId, video).then(updatedPlaylist => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.ADD_VIDEO_INTO_PLAYLIST,
      updatedPlaylist: updatedPlaylist
    });
  });
}