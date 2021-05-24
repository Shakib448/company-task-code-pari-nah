import Axios from "../AxiosConfig/AxiosConfig";

export const loginApi = async (loginData) => {
  const { data } = await Axios.post("/api/users/login", loginData);
  localStorage.setItem("userInfo", JSON.stringify(data));
  return data;
};

export const registerApi = async (registerData) => {
  const { data } = await Axios.post("/api/users", registerData);
  return data;
};

export const khojApi = async (khojData) => {
  const { data } = await Axios.post("/api/khoj", khojData);
  return data;
};
