import axios from 'axios';
import * as playlistsApi from '../api/playlists-api';
import actionTypes from './action-types';

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
  return axios.get(playlistsApi.getPlaylists())
    .then((response) => response.data)
    .then((json) => dispatch(receivePlaylists(json)));
};

export const addNewVideoPlaylist =  (publicId, video) => (dispatch) => axios.post(playlistsApi.addNewVideoPlaylist(publicId), video )
  .then((res) => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.ADD_VIDEO_INTO_PLAYLIST,
      playlist: res.data,
    });
  });

export const createPlaylist = (playlist) => (dispatch) => axios.post(playlistsApi.postPlaylists(),  playlist )
  .then((res) => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.CREATE_PLAYLIST,
      playlist: res.data,
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
