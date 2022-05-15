import {
  ADVERTS_LOADED,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  UI_RESET_ERROR,
} from "./types";

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLoginFailure = (error) => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
  error: true,
});

export const authLogin = (credentials) => {
  return async function (dispatch, _getState, { api }) {
    try {
      dispatch(authLoginRequest());
      const response = await api.auth.login(credentials);
      if (response.status === 401) {
        throw new Error("Invalid email or password");
      }
      dispatch(authLoginSuccess());
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };
};

export const authLogoutSucces = () => ({
  type: AUTH_LOGOUT_SUCCESS,
});

export const authLogout = () => {
  return async function (dispatch, _getState, { api }) {
    try {
      const response = await api.auth.logout();
      dispatch(authLoginSuccess());
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const advertsLoaded = (adverts) => ({
  type: ADVERTS_LOADED,
  payload: adverts,
});

export const uiResetError = () => ({ type: UI_RESET_ERROR });
