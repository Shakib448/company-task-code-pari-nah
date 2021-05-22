import Axios from "../AxiosConfig/AxiosConfig";

export const loginApi = async (loginData) => {
  const { data } = await Axios.post("/api/users/login", loginData);
  return data;
};

export const registerApi = async (registerData) => {
  const { data } = await Axios.post("/api/users", registerData);
  return data;
};
