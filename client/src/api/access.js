import axios from "./config";
import { setToken } from "./auth";

export function signUpUser(user) {
  return axios.post(`/auth/add`, user);
}

export function signInUser(data) {
  return axios.post(`/auth/login`, data).then((response) => {
    if (response.status === 200) {
      setToken(response.data.token);
    } else {
      throw new Error("Hubo un error al iniciar sesión");
    }
  });
}

export default { signInUser, signUpUser };
