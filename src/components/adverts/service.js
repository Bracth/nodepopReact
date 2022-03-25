import client from "../../api/client";
import img from "../../assets/defaultImgAdvert.jpg";

const advertBaseUrl = "/v1/adverts";

export const adverts = [
  {
    name: "Movil",
    sale: true,
    price: 150,
    tags: ["mobile"],
    img: img,
    id: 1,
  },
  { name: "Mazda", sale: false, price: 1800, tags: ["motor"], img: img, id: 2 },
  { name: "Portatil", sale: true, price: 720, tags: ["work"], img: img, id: 3 },
  {
    name: "Reloj",
    sale: false,
    price: 60,
    tags: ["lifestyle"],
    img: img,
    id: 4,
  },
  {
    name: "Samsung",
    sale: false,
    price: 650,
    tags: ["work", "mobile"],
    img: img,
    id: 5,
  },
  {
    name: "Ford",
    sale: true,
    price: 7800,
    tags: ["motor", "lifestyle"],
    img: img,
    id: 6,
  },
  {
    name: "PS5",
    sale: true,
    price: 499,
    tags: ["lifestyle"],
    img: img,
    id: 7,
  },
  {
    name: "Moto de agua",
    sale: false,
    price: 4700,
    tags: ["lifestyle", "motor"],
    img: img,
    id: 8,
  },
];

export const getLatestAdverts = () => {
  const url = advertBaseUrl;
  return client.get(url);
};

export const createAdvert = async (advert) => {
  const url = advertBaseUrl;
  try {
    return await client.post(url, advert);
  } catch (error) {
    console.log(error.message);
  }
};
