import {
  ADVERTS_LOADED,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
} from "./types";

export const defaulState = {
  auth: true,
  adverts: [],
};

export const auth = (state = defaulState.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const adverts = (state = defaulState.adverts, action) => {
  switch (action.type) {
    case ADVERTS_LOADED:
      return action.payload;
    default:
      return state;
  }
};
