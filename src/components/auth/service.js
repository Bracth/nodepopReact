import client from "../../api/client";

export const login = async ({ remember, ...credentials }) => {
  try {
    const acessToken = await client.post("/auth/login", credentials);
    console.log(acessToken);
  } catch (error) {
    console.log(error.message);
  }
};
