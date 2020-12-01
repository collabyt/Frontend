import * as playlistsApi from '../api/playlists-api';
import actionTypes from './action-types';

const requestPOSTOptions = (bodyRequest) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bodyRequest),
});

export const requestPlaylists = () => ({
  type: actionTypes.REQUEST_PLAYLISTS,
  isloading: true,
});

export const receivePlaylists = (json) => ({
  type: actionTypes.LOAD_PLAYLISTS,
  list: json,
});

export const loadPlaylists = () => (dispatch) => {
  dispatch(requestPlaylists());
  return fetch(playlistsApi.getPlaylists())
    .then((response) => response.json())
    .then((json) => dispatch(receivePlaylists(json)));
};

export const addNewVideoPlaylist = (publicId, video) => (dispatch) => fetch(playlistsApi.addNewVideoPlaylist(publicId), requestPOSTOptions(video))
  .then((updatedPlaylist) => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.ADD_VIDEO_INTO_PLAYLIST,
      playlist: updatedPlaylist,
    });
  });

export const savePlaylist = (playlist) => (dispatch) => fetch(playlistsApi.getPlaylists(), requestPOSTOptions(playlist))
  .then((savedPlaylist) => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.CREATE_PLAYLIST,
      playlist: savedPlaylist,
    });
  });

/* export function getPlaylistById(playlistId) {
  return playlistsApi.getPlaylistById(playlistId).then(playlist => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_PLAYLIST_BY_ID,
      playlist: playlist
    });
  });
} */
