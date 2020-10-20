import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _keywords = [];

class KeywordStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getKeywords() {
    return _keywords;
  }

}

const store = new KeywordStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_KEYWORDS:
      _keywords.push(action.key);
      store.emitChange();
      break;
    case actionTypes.GET_KEYWORDS:
      _keywords = action.keywords;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
