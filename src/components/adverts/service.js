import client from "../../api/client";

const advertBaseUrl = "/v1/adverts";

export const getLastedsAdverts = () => {
  const url = advertBaseUrl;
  return client.get(url);
};

export const getLastedAdvert = (id) => {
  const url = `${advertBaseUrl}/${id}`;
  return client.get(url);
};

export const createAdvert = async (advert) => {
  const url = advertBaseUrl;
  try {
    return await client.post(url, advert);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAdvert = async (id) => {
  const url = `${advertBaseUrl}/${id}`;
  return client.delete(url);
};

export const getTags = async () => {
  const url = `${advertBaseUrl}/tags`;
  return client.get(url);
};
