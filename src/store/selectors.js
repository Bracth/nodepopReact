export const getIsLogged = (state) => state.auth;

export const getAdverts = (state) => state.adverts.data;

export const getDavertsIsLoaded = (state) => state.adverts.isLoaded;

export const getAdvert = (state, advertId) =>
  state.adverts.data.find((advert) => advert.id === advertId);

export const getUi = (state) => state.ui;
