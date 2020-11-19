import { combineReducers } from 'redux';
import playlists from './playlists';
import keywords from './keywords';

const reducers = combineReducers({
  playlists,
  keywords,
});

export default reducers;
