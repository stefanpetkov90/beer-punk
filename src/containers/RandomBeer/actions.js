import {
  GET_RANDOM_BEER_REQUEST,
  GET_RANDOM_BEER_SUCCESS,
  GET_RANDOM_BEER_ERROR,
} from "./types";

// -------------- GET_RANDOM_BEER_REQUEST --------------

/** Action to get a random.
 * @return {any} Object with a random beer
 */
export function getRandomBeer() {
  return {
    type: GET_RANDOM_BEER_REQUEST,
  };
}

export function getRandomBeerSuccess(randomBeer) {
  return {
    type: GET_RANDOM_BEER_SUCCESS,
    payload: randomBeer,
  };
}

/** On unsuccessfull getRandomBeer update store and show error message .
 * @param {string} errorMessage - Error message
 */
export function getRandomBeerError(errorMessage) {
  return {
    type: GET_RANDOM_BEER_ERROR,
    payload: errorMessage,
  };
}
