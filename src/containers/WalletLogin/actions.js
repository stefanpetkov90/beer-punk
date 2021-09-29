import { SET_USER, REMOVE_USER } from "./types";

// -------------- SET_USER --------------

/** Action to set a user.
 */
export function setUser(account, balance) {
  return {
    type: SET_USER,
    payload: { account, balance },
  };
}

// -------------- REMOVE_USER --------------

/** Action to remove the user.
 */
export function removeUser() {
  return {
    type: REMOVE_USER,
  };
}
