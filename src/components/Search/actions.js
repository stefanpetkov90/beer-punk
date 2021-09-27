import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_ERROR,
} from "./types";

// -------------- GET_SEARCH_REQUEST --------------

/** Action to get search results.
 * @return {any} Array of objects with all cars
 */
export function getSearch(searchString) {
  return {
    type: GET_SEARCH_REQUEST,
    payload: searchString,
  };
}

export function getSearchSuccess(result) {
  return {
    type: GET_SEARCH_SUCCESS,
    payload: result,
  };
}
// -------------- GET_SEARCH_ERROR --------------
/** On unsuccessfull search update store and show error message .
 * @param {string} errorMessage - Error message
 */
export function getSearchError(errorMessage) {
  return {
    type: GET_SEARCH_ERROR,
    payload: errorMessage,
  };
}
