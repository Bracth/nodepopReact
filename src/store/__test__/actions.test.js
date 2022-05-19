import { authLoginRequest, advertsLoadedSuccess } from "../actions";
import { ADVERTS_LOADED_SUCCESS, AUTH_LOGIN_REQUEST } from "../types";

describe("authLoginRequest", () => {
  test("should return an AUTH_LOGIN_REQUEST action", () => {
    const expectedAction = {
      type: AUTH_LOGIN_REQUEST,
    };
    const result = authLoginRequest();
    expect(result).toEqual(expectedAction);
  });
});

describe("advertsLoadedSuccess", () => {
  test("should return a ADVERT_LOADED_SUCCESS action", () => {
    const adverts = "adverts";
    const expectedAction = {
      type: ADVERTS_LOADED_SUCCESS,
      payload: adverts,
    };
    const result = advertsLoadedSuccess(adverts);
    expect(result).toEqual(expectedAction);
  });
});
