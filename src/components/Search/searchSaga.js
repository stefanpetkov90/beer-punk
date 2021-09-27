import { GET_SEARCH_REQUEST } from "./types.js";
import { getSearchSuccess, getSearchError } from "./actions.js";
import { put, take, call } from "redux-saga/effects";

/** Call getSearch */
export default function* getSearchSaga(api) {
  while (true) {
    const createSearchRequest = yield take(GET_SEARCH_REQUEST);
    if (createSearchRequest.payload) {
      const searchString = createSearchRequest.payload;
      yield call(getSearch, api, searchString);
    }
  }
}

/** Create getSearch request
 * @return {any} Object with Search results
 */
function* getSearch(api, searchString) {
  var response;
  try {
    response = yield call(api.searchBeers, searchString);
    yield put(getSearchSuccess(response.data));
  } catch (error) {
    yield put(getSearchError(error));
  }
}
