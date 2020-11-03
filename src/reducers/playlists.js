import actionTypes from '../actions/actionTypes';

const initialState = {
  playlists: [],
  selectedPlaylist: null
}

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

function addNewVideoPlaylist(playlists, playlistId, video) {
    playlists.map(p => {
      if (p.id === playlistId) {
        p.videos.push(video);
      }
      
      return p;
    });

    return playlists;
} 

const playlists = (state = initialState, action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_PLAYLIST:
      let newPlaylists = state.playlists.concat(action.playlist)
      return updateObject(state, { playlists: newPlaylists })
    case actionTypes.UPDATE_PLAYLIST:
      newPlaylists = state.playlists.map(playlist =>
        playlist.id === action.playlist.id ? action.playlist : playlist
      )
      return updateObject(state, { playlists: newPlaylists })
    case actionTypes.LOAD_PLAYLISTS:
      return updateObject(state, { playlists: action.list })
    case actionTypes.GET_PLAYLIST_BY_ID:
      return updateObject(state, { selectedPlaylist: action.playlist})
    case actionTypes.ADD_VIDEO_INTO_PLAYLIST:
      return updateObject(state, { playlists: addNewVideoPlaylist(state.playlists, action.playlistId, action.video)})      
    default:
      return state;
  }
}


export default playlists;
