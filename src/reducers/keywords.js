import actionTypes from '../actions/actionTypes';
import { initialState } from './playlists';

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

const keywords = (state = initialState, action) => {
  switch (action.yype) {
    case actionTypes.CREATE_KEYWORDS:
      let newKeywords = state.keywords.concat(action.keyword)
      return updateObject(state, { keywords: newKeywords })
    case actionTypes.GET_KEYWORDS:
      return updateObject(state, { keywords: action.keywords })
    default:
      return state
  }
};

export default keywords;
