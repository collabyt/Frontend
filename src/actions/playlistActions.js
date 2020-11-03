import * as playlistsApi from "../api/playlistsApi";
import actionTypes from "./actionTypes";

export const requestPlaylists = () => ({
  type: actionTypes.REQUEST_PLAYLISTS
})

export const receivePlaylists = (json) => ({
  type: actionTypes.LOAD_PLAYLISTS,
  list: json
})

export const loadPlaylists = () => dispatch => {
  dispatch(requestPlaylists())
  return fetch(playlistsApi.getPlaylists())
    .then(response => response.json())
    .then(json => dispatch(receivePlaylists(json)))
}

/*export function savePlaylist(playlist) {
  return playlistsApi.savePlaylist(playlist).then(savedPlaylist => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: playlist.id
        ? actionTypes.UPDATE_PLAYLIST
        : actionTypes.CREATE_PLAYLIST,
      playlist: savedPlaylist
    });
  });
}*/



/*export function getPlaylistById(playlistId) {
  return playlistsApi.getPlaylistById(playlistId).then(playlist => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_PLAYLIST_BY_ID,
      playlist: playlist
    });
  });
}*/

/*export function addNewVideoPlaylist(playlistId, video) {
  return playlistsApi.addNewVideoPlaylist(playlistId, video).then(updatedPlaylist => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.ADD_VIDEO_INTO_PLAYLIST,
      playlistId: playlistId,
      video: video
    });
  });
}*/