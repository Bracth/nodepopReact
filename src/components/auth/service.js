import client, { setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage.js";

export const login = async ({ remember, ...credentials }) => {
  try {
    const acessToken = await client.post("/auth/login", credentials);
    setAuthorizationHeader(acessToken);
    storage.set("auth", acessToken);
  } catch (error) {
    console.log(error.message);
  }
};
