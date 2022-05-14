export const getIsLogged = (state) => state.auth;

export const getAdverts = (state) => state.adverts;

export const getAdvert = (state, advertId) =>
  state.adverts.find((advert) => advert.id === advertId);

export const getUi = (state) => state.ui;
