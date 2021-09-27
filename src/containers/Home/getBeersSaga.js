import { GET_BEERS_REQUEST } from "./types.js";
import { getBeersSuccess, getBeersError } from "./actions.js";
import { put, take, call } from "redux-saga/effects";

/** Call getAllBeers */
export default function* getBeersSaga(api) {
  while (true) {
    yield take(GET_BEERS_REQUEST);
    yield call(getAllBeers, api);
  }
}

/** Create getBeers request
 * @return {any} Object with all Beers
 */
function* getAllBeers(api) {
  var response;
  try {
    response = yield call(api.getBeers);
    yield put(getBeersSuccess(response.data));
  } catch (error) {
    yield put(getBeersError(error));
  }
}
