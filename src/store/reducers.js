import {
  ADVERTS_LOADED,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
} from "./types";

export const defaulState = {
  auth: true,
  adverts: [],
  ui: {
    isLoadig: false,
    error: null,
  },
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

export const ui = (state = defaulState.ui, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, isLoadig: true, error: null };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoadig: false };
    case AUTH_LOGIN_FAILURE:
      return { ...state, isLoadig: false, error: action.payload };
    default:
      return state;
  }
};
