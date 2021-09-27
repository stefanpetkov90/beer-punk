import { GET_FAVORITES_REQUEST } from "../containers/Favourites/types";

/** Store states
 * @constant {Object} */
export const initialState = {
  favorites: [],
};

/** Favorites reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Action Creator - getBeers
     * it will receive beers from the saga
     */
    case GET_FAVORITES_REQUEST:
      return { favorites: action.payload };

    default:
      return state;
  }
};

export default favoritesReducer;
