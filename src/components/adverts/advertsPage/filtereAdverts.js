export const filterAdverts = (adverts, filters, tags) => {
  let filteredAdverts = adverts;

  // filter with name
  if (filters.name !== "") {
    filteredAdverts = filteredAdverts.filter((advert) =>
      advert.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }

  // filter with sale

  if (filters.sale === "sale") {
    filteredAdverts = filteredAdverts.filter((advert) => advert.sale);
  } else if (filters.sale === "buy") {
    filteredAdverts = filteredAdverts.filter((advert) => !advert.sale);
  }

  // filter with price

  filteredAdverts = filteredAdverts.filter(
    (advert) =>
      filters.minPrice <= advert.price && advert.price <= filters.maxPrice
  );

  // filter with tags

  if (tags.length > 0) {
    filteredAdverts = filteredAdverts.filter((advert) =>
      tags.every((tag) => advert.tags.includes(tag))
    );
  }
  return filteredAdverts;
};
