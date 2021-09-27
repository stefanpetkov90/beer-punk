import {
  GET_RANDOM_BEER_SUCCESS,
  GET_RANDOM_BEER_ERROR,
} from "../containers/RandomBeer/types";

/** Store states
 * @constant {Object} */
export const initialState = {
  getBeersError: "",
  randomBeer: [],
};

/** Get Beers reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const getRandomBeerReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Action Creator - getRandomBeer
     * it will receive beers from the saga
     */
    case GET_RANDOM_BEER_SUCCESS:
      return {
        ...state,
        randomBeer: action.payload,
        getBeersError: "",
      };

    /** Action Creator - Get random beer failed
     * it will receive the error message  dispatching from the saga
     */
    case GET_RANDOM_BEER_ERROR:
      return {
        ...state,
        getBeersError: action.payload,
      };

    default:
      return state;
  }
};

export default getRandomBeerReducer;
