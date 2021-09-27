import { all } from "redux-saga/effects";
// Saga
import getBeersSaga from "../containers/Home/getBeersSaga";
import getSearchSaga from "../components/Search/searchSaga";
import getRandomBeersSaga from "../containers/RandomBeer/getRandomBeerSaga";
// API
import { api as getBeersApi } from "../api/getBeersApi";
import { api as getSearchApi } from "../api/searchApi";
import { api as getRandomBeerApi } from "../api/getRandomBeer";
/** Root saga.
 * @return {Object} - return store
 */
function* rootSaga() {
  yield all([
    getBeersSaga(getBeersApi),
    getSearchSaga(getSearchApi),
    getRandomBeersSaga(getRandomBeerApi),
  ]);
}

export default rootSaga;
