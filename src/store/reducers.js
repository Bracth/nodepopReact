import {
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  UI_RESET_ERROR,
} from "./types";

export const defaulState = {
  auth: true,
  adverts: {
    isLoaded: false,
    data: [],
  },
  ui: {
    isLoading: false,
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
    case ADVERTS_LOADED_SUCCESS:
      return { isLoaded: true, data: action.payload };
    default:
      return state;
  }
};

export const ui = (state = defaulState.ui, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
    case ADVERTS_LOADED_REQUEST:
      return { ...state, isLoading: true, error: null };
    case AUTH_LOGIN_SUCCESS:
    case ADVERTS_LOADED_SUCCESS:
      return { ...state, isLoading: false };
    case AUTH_LOGIN_FAILURE:
    case ADVERTS_LOADED_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case UI_RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
