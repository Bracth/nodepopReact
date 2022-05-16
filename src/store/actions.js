import { getAdvert, getDavertsIsLoaded, getTagsIsLoaded } from "./selectors";
import {
  ADVERTS_LOADED_FAILURE,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERT_LOADED_REQUEST,
  ADVERT_LOADED_SUCCESS,
  ADVERT_LOADED_FAILURE,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  UI_RESET_ERROR,
  ADVERT_CREATED_SUCCESS,
  ADVERT_CREATED_REQUEST,
  ADVERT_CREATED_FAILURE,
  ADVERT_TAGS_LOADED_SUCCESS,
  ADVERT_TAGS_LOADED_REQUEST,
  ADVERT_TAGS_LOADED_FAILURE,
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

export const advertsLoadedRequest = () => ({
  type: ADVERTS_LOADED_REQUEST,
});

export const advertsLoadedSuccess = (adverts) => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts,
});

export const advertsLoadedFailure = (error) => ({
  type: ADVERTS_LOADED_FAILURE,
  payload: error,
  error: true,
});

export const advertsLoaded = () => {
  return async function (dispatch, getState, { api }) {
    const areAdvertsLoaded = getDavertsIsLoaded(getState());
    if (areAdvertsLoaded) return;
    try {
      dispatch(advertsLoadedRequest());
      const adverts = await api.adverts.getLastedsAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
    }
  };
};

export const advertLoadedSuccess = (advert) => ({
  type: ADVERT_LOADED_SUCCESS,
  payload: advert,
});

export const advertLoadedRequest = () => ({
  type: ADVERT_LOADED_REQUEST,
});

export const advertLoadedFailure = (error) => ({
  type: ADVERT_LOADED_FAILURE,
  payload: error,
});

export const advertLoaded = (advertId) => {
  return async function (dispatch, getState, { api }) {
    const advertLoaded = getAdvert(advertId)(getState());
    if (advertLoaded) return;
    try {
      dispatch(advertLoadedRequest());
      const advert = await api.adverts.getLastedAdvert(advertId);
      dispatch(advertLoadedSuccess(advert));
    } catch (error) {
      dispatch(advertLoadedFailure(error));
    }
  };
};

export const advertTagsLoadedSuccess = (tags) => ({
  type: ADVERT_TAGS_LOADED_SUCCESS,
  payload: tags,
});

export const advertTagsLoadedRequest = () => ({
  type: ADVERT_TAGS_LOADED_REQUEST,
});

export const advertTagsLoadedFailure = (error) => ({
  type: ADVERT_TAGS_LOADED_FAILURE,
  payload: error,
});

export const advertTagsLoaded = () => {
  return async function (dispatch, getState, { api }) {
    const tagsIsLoaded = getTagsIsLoaded(getState());
    if (tagsIsLoaded) return;
    try {
      dispatch(advertTagsLoadedRequest());
      const tags = await api.adverts.getTags();
      dispatch(advertTagsLoadedSuccess(tags));
    } catch (error) {
      dispatch(advertTagsLoadedFailure(error));
    }
  };
};

export const advertCreatedSuccess = () => ({
  type: ADVERT_CREATED_SUCCESS,
});

export const advertCreatedRequest = () => ({
  type: ADVERT_CREATED_REQUEST,
});

export const advertCreatedFailure = (error) => ({
  type: ADVERT_CREATED_FAILURE,
});

export const advertCreated = (advert) => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(advertCreatedRequest());
      const createdAdvert = await api.adverts.createAdvert(advert);
      dispatch(advertCreatedSuccess());
      return createdAdvert;
    } catch (error) {
      dispatch(advertCreatedFailure());
    }
  };
};

export const uiResetError = () => ({ type: UI_RESET_ERROR });
