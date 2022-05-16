export const getIsLogged = (state) => state.auth;

export const getAdverts = (state) => state.adverts.data;

export const getDavertsIsLoaded = (state) => state.adverts.isLoaded;

export const getAdvert = (advertId) => (state) =>
  state.adverts.data.find((advert) => advert.id === advertId);

export const getTagsIsLoaded = (state) => state.tags.isLoaded;

export const getTags = (state) => state.tags.data;

export const getUi = (state) => state.ui;
