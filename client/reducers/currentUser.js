import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, LOG_OUT, NO_TOKEN } from "../type/type"
import { PayloadTooLarge } from "http-errors";
import { token } from "morgan";

const initialState = {
  user: null,
  token: localStorage.getItem('token') || '',
  isAuthInProgress: true
}

function currentUser(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthInProgress: false,
        token: action.payload.token

      }
    default:
      return state
  }
}

export default currentUser;