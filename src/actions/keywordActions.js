import dispatcher from "../appDispatcher";
import * as keywordsApi from "../api/keywordsApi";
import actionTypes from "./actionTypes";

export function createKeyword(newKeyword) {
  return keywordsApi.createKeyword(newKeyword).then(savedKeyword => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_PLAYLIST,
      keyword: savedKeyword
    });
  });
}

export function getKeywords() {
  return keywordsApi.getKeywords().then(keywords => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_KEYWORDS,
      keywords: keywords
    });
  });
}

