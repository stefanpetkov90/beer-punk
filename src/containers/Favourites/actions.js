import { GET_FAVORITES_REQUEST, REMOVE_FAVORITES_REQUEST } from "./types";

// -------------- GET_FAVORITE_REQUEST --------------

/** Action to get all beers.
 * @return {any} Array of objects with all cars
 */
export function setFavorites(favorites) {
  return {
    type: GET_FAVORITES_REQUEST,
    payload: favorites,
  };
}

// -------------- REMOVE_FAVORITE_REQUEST --------------
/** Action to get remove favorites.
 * @return {any} Array of objects with all cars
 */
export function removeFavorites(id) {
  return {
    type: REMOVE_FAVORITES_REQUEST,
    payload: id,
  };
}
