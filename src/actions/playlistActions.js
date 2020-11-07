import * as playlistsApi from "../api/playlistsApi";
import actionTypes from "./actionTypes";

const requestPOSTOptions = (bodyRequest) => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyRequest)
    }
}

export const requestPlaylists = () => ({
  type: actionTypes.REQUEST_PLAYLISTS,
  isloading: true
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

export const addNewVideoPlaylist = (playlistId, video) => dispatch => {
  return fetch(playlistsApi.addNewVideoPlaylist(playlistId), requestPOSTOptions(video))
    .then(updatedPlaylist => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.ADD_VIDEO_INTO_PLAYLIST,
      playlist: updatedPlaylist
    });
  });
}



export const savePlaylist = (playlist) => dispatch => {
  return fetch(playlistsApi.getPlaylists(), requestPOSTOptions(playlist))
    .then(savedPlaylist => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.CREATE_PLAYLIST,
      playlist: savedPlaylist
    });
  });
}

/*export function getPlaylistById(playlistId) {
  return playlistsApi.getPlaylistById(playlistId).then(playlist => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_PLAYLIST_BY_ID,
      playlist: playlist
    });
  });
}*/

