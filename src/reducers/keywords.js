import actionTypes from '../actions/action-types';

export const initialState = {
  totalKyewords: []
};

const keywords = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_KEYWORDS:
      let newKeywords = state.totalKyewords.concat(action.keyword);
      return {
        ...state,
        totalKyewords: newKeywords,
      };
    case actionTypes.LOAD_KEYWORDS:
      return {
        ...state,
        totalKyewords: action.list,
      };
    default:
      return state;
  }
};

export default keywords;
