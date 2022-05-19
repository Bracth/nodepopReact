import { getAdvert } from "../selectors";

describe("getAdvert", () => {
  test("should return an advert", () => {
    const advertId = 1;
    const adverts = [{ id: advertId }];
    const state = {
      adverts: { data: adverts },
    };
    expect(getAdvert(advertId)(state)).toEqual(adverts[0]);
  });
  test("should not return an advert", () => {
    const advertId = 1;
    const adverts = [];
    const state = {
      adverts: { data: adverts },
    };
    expect(getAdvert(advertId)(state)).toBeUndefined();
  });
});
