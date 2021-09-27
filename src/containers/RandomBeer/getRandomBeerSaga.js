import { GET_RANDOM_BEER_REQUEST } from "./types.js";
import { getRandomBeerSuccess, getRandomBeerError } from "./actions.js";
import { put, take, call } from "redux-saga/effects";

/** Call getAllBeers */
export default function* getRandomBeersSaga(api) {
  while (true) {
    yield take(GET_RANDOM_BEER_REQUEST);
    yield call(getRandomBeer, api);
  }
}

/** Create getBeers request
 * @return {any} Object with all Beers
 */
function* getRandomBeer(api) {
  var response;
  try {
    response = yield call(api.getRandomBeer);
    yield put(getRandomBeerSuccess(response.data));
  } catch (error) {
    yield put(getRandomBeerError(error));
  }
}
