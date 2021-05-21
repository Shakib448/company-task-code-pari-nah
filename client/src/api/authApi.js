import Axios from "../AxiosConfig/AxiosConfig";

export const loginApi = async (loginData) => {
  try {
    const { data } = await Axios.post("/api/users/login", loginData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerApi = async (registerData) => {
  try {
    const { data } = Axios.post("/api/users", registerData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
