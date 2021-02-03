import * as keywordsApi from '../api/keywords-api';
import actionTypes from './action-types';
import axios from 'axios';

export const requestKeywords = () => ({
  type: actionTypes.REQUEST_KEYWORDS,
  isloading: true,
});

export const receiveKeywords = (json) => ({
  type: actionTypes.LOAD_PLAYLISTS,
  list: json,
});

export const loadKeywordsByWord = (word) => (dispatch) => {
  return async dispatch => { await axios.get(keywordsApi.getKeywords(word))
    .then((response) => response.data)
    .then(async (json) => await dispatch(receiveKeywords(json)))};
};

export const createKeyword = (keyword) => (dispatch) => axios.post(keywordsApi.postKeywords(),  keyword )
  .then((res) => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatch({
      type: actionTypes.CREATE_KEYWORDS,
      keyword: res.data,
    });
  });
