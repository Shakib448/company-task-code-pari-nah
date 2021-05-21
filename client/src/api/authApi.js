import Axios from "../AxiosConfig/AxiosConfig";

export const loginApi = async (loginData) => {
  try {
    const { data } = Axios.post("/api/users/login", loginData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
