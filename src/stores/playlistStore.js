import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _playlists = [];

class PlaylistStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getPlaylists() {
    return _playlists;
  }

}

const store = new PlaylistStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_PLAYLIST:
      _playlists.push(action.playlist);
      store.emitChange();
      break;
    case actionTypes.UPDATE_PLAYLIST:
      _playlists = _playlists.map(playlist =>
        playlist.id === action.playlist.id ? action.playlist : playlist
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_PLAYLISTS:
      _playlists = action.playlists;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
