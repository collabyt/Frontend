import actionTypes from '../actions/action-types';

export const initialState = {
  totalPlaylists: [],
  totalKyewords: [],
  selectedPlaylist: null,
};

function addNewVideoPlaylist(playlists, playlist) {
  playlists.map((p) => {
    if (p.id === playlist.id) {
      return playlist;
    }
  });

  return playlists;
}

const playlists = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PLAYLIST:
      let newPlaylists = state.totalPlaylists.concat(action.playlist);
      return {
        ...state,
        totalPlaylists: newPlaylists,
      };
    case actionTypes.UPDATE_PLAYLIST:
      newPlaylists = state.totalPlaylists.map((playlist) => (playlist.id === action.playlist.id ? action.playlist : playlist));
      return {
        ...state,
        totalPlaylists: newPlaylists,
      };
    case actionTypes.LOAD_PLAYLISTS:
      return {
        ...state,
        totalPlaylists: action.list,
      };
    case actionTypes.GET_PLAYLIST_BY_ID:
      return {
        ...state,
        selectedPlaylist: action.playlist,
      };
    case actionTypes.ADD_VIDEO_INTO_PLAYLIST:
      return {
        ...state,
        totalPlaylists: addNewVideoPlaylist(state.playlists, action.playlist),
      };
    default:
      return state;
  }
};

export default playlists;
