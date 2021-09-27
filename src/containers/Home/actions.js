import { GET_BEERS_REQUEST, GET_BEERS_SUCCESS, GET_BEERS_ERROR } from "./types";

// -------------- GET_BEERS_REQUEST --------------

/** Action to get all beers.
 * @return {any} Array of objects with all cars
 */
export function getBeers() {
  return {
    type: GET_BEERS_REQUEST,
  };
}

export function getBeersSuccess(beers) {
  return {
    type: GET_BEERS_SUCCESS,
    payload: {
      beers,
    },
  };
}

/** On unsuccessfully getBeers update store and show error message .
 * @param {string} errorMessage - Error message
 */
export function getBeersError(errorMessage) {
  return {
    type: GET_BEERS_ERROR,
    payload: errorMessage,
  };
}
