import actionTypes from '../actions/action-types';
import { initialState } from './playlists';

function updateObject(oldObject, newValues) {
  return { ...oldObject, ...newValues };
}

const keywords = (state = initialState, action) => {
  switch (action.yype) {
    case actionTypes.CREATE_KEYWORDS:
      const newKeywords = state.keywords.concat(action.keyword);
      return updateObject(state, { keywords: newKeywords });
    case actionTypes.GET_KEYWORDS:
      return updateObject(state, { keywords: action.keywords });
    default:
      return state;
  }
};

export default keywords;
