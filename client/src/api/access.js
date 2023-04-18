import axios from "./config";

export function signUpUser(user) {
  return axios.post(`/auth/add`, user);
}

export function signInUser(data) {
  return axios.post(`/auth/login`, data);
}

export default { signInUser, signUpUser };
