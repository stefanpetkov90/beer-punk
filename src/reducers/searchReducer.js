import {
  GET_SEARCH_SUCCESS,
  GET_SEARCH_ERROR,
} from "../components/Search/types";

/** Store states
 * @constant {Object} */
export const initialState = {
  searchResult: "",
  getSearchError: "",
};

/** Favorites reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Action Creator - searchBeers
     * it will receive beers from the saga
     */
    case GET_SEARCH_SUCCESS:
      return { searchResult: action.payload };
    case GET_SEARCH_ERROR:
      return {
        ...state,
        getSearchError: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
