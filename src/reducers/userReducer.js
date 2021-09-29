import { SET_USER, REMOVE_USER } from "../containers/WalletLogin/types";

/** Store states
 * @constant {Object} */
export const initialState = {
  account: null,
  balance: null,
  isSignedIn: false,
};

/** User reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Action Creator - searchBeers
     * it will receive beers from the saga
     */
    case SET_USER:
      return {
        account: action.payload.account,
        balance: action.payload.balance,
        isSignedIn: true,
      };
    case REMOVE_USER:
      return {
        account: null,
        balance: null,
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
