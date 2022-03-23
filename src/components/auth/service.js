import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage.js";

export const login = async ({ remember, ...credentials }) => {
  try {
    const acessToken = await client.post("/auth/login", credentials);
    setAuthorizationHeader(acessToken);
    if (remember) {
      storage.set("auth", acessToken);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    removeAuthorizationHeader();
    storage.remove("auth");
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (credentials) => {
  try {
    await client.post("/auth/signup", credentials);
  } catch (error) {
    console.log(error.message);
  }
};
