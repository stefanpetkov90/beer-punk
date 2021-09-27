import { GET_BEERS_SUCCESS, GET_BEERS_ERROR } from "../containers/Home/types";

/** Store states
 * @constant {Object} */
export const initialState = {
  getBeersError: "",
  beers: [],
};

/** Get Beers reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const getBeersReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Action Creator - getBeers
     * it will receive beers from the saga
     */
    case GET_BEERS_SUCCESS:
      return {
        ...state,
        beers: action.payload.beers,
        getBeersError: "",
      };

    /** Action Creator - Get beers failed
     * it will receive the error message  dispatching from the saga
     */
    case GET_BEERS_ERROR:
      return {
        ...state,
        getBeersError: action.payload,
      };

    default:
      return state;
  }
};

export default getBeersReducer;
