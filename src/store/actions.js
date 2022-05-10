import {
  ADVERTS_LOADED,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
} from "./types";

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLogoutSucces = () => ({
  type: AUTH_LOGOUT_SUCCESS,
});

export const advertsLoaded = () => ({ type: ADVERTS_LOADED });
