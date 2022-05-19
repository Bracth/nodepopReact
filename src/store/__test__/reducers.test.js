import { auth, adverts, defaulState } from "../reducers";
import {
  ADVERTS_LOADED_SUCCESS,
  ADVERT_CREATED_SUCCESS,
  ADVERT_DELETED_SUCCESS,
  ADVERT_LOADED_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
} from "../types";

describe("auth", () => {
  test("should manage AUTH_LOGIN_SUCCESS action", () => {
    const action = {
      type: AUTH_LOGIN_SUCCESS,
    };
    const initialState = false;
    const result = auth(initialState, action);
    expect(result).toBe(true);
  });
  test("should manage AUTH_LOGOUT_SUCCESS action", () => {
    const action = {
      type: AUTH_LOGOUT_SUCCESS,
    };
    const initialState = true;
    const result = auth(initialState, action);
    expect(result).toBe(false);
  });
  test("should manage any action", () => {
    const action = {
      type: "ANY",
    };
    const initialState = true;
    const result = auth(initialState, action);
    expect(result).toBe(initialState);
  });
  test("should manage default state", () => {
    const action = {
      type: "ANY",
    };
    const initialState = undefined;
    const result = auth(initialState, action);
    expect(result).toBe(defaulState.auth);
  });
});

describe("adverts", () => {
  test("should manage ADVERTS_LOADED_SUCCESS action", () => {
    const loadedAdverts = ["advert1"];
    const action = {
      type: ADVERTS_LOADED_SUCCESS,
      payload: loadedAdverts,
    };
    const result = adverts(defaulState.adverts, action);
    expect(result).toEqual({ isLoaded: true, data: loadedAdverts });
  });
  test("should manage ADVERT_LOADED_SUCCESS action", () => {
    const loadedAdvert = ["advert2"];
    const action = {
      type: ADVERT_LOADED_SUCCESS,
      payload: loadedAdvert,
    };
    const initialState = {
      isLoaded: false,
      data: ["advert1"],
    };
    const result = adverts(initialState, action);
    expect(result).toEqual({
      ...initialState,
      data: [...initialState.data, loadedAdvert],
    });
  });
  test("should manage ADVERT_CREATED_SUCCESS action", () => {
    const loadedAdvert = ["advert2"];
    const action = {
      type: ADVERT_CREATED_SUCCESS,
      payload: loadedAdvert,
    };
    const initialState = {
      isLoaded: false,
      data: ["advert1"],
    };
    const result = adverts(initialState, action);
    expect(result).toEqual({
      ...initialState,
      data: [...initialState.data, loadedAdvert],
    });
  });
  test("should manage ADVERT_DELETED_SUCCESS action", () => {
    const deletedAdvert = 1;
    const action = {
      type: ADVERT_DELETED_SUCCESS,
      payload: deletedAdvert,
    };
    const initialState = {
      isLoaded: false,
      data: [{ id: 1 }, { id: 2 }],
    };
    const result = adverts(initialState, action);
    expect(result).toEqual({
      ...initialState,
      data: [{ id: 2 }],
    });
  });
  test("should manage any action", () => {
    const action = {
      type: "ANY",
    };
    const result = adverts(defaulState.adverts, action);
    expect(result).toEqual(defaulState.adverts);
  });
  test("should return default state", () => {
    const action = {
      type: "ANY",
    };
    const initialState = undefined;
    const result = adverts(initialState, action);
    expect(result).toEqual(defaulState.adverts);
  });
});
