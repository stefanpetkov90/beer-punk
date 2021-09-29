import { combineReducers } from "redux";
import getBeersReducer from "./getBeersReducer";
import favoritesReducer from "./favoriteReducer";
import searchReducer from "./searchReducer";
import getRandomBeerReducer from "./getRandomBeerReducer";
import userReducer from "./userReducer";

/** Combine all reducers
 * @returns {Object} store
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    getBeers: getBeersReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    randomBeer: getRandomBeerReducer,
    user: userReducer,
  });
  return rootReducer;
}
