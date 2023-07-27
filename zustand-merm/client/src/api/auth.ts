import clientAxios from "../libs/axios";

export const loginRequest = async (email: string, password: string) => {
  const response = await clientAxios.post("login", { email, password });
  return response.data;
};

export const meRequest = async (token: string) => {
  const response = await clientAxios.get("me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
