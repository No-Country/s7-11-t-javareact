import axios from "axios";

const BASE_URL = "https://s7-11-t-javareact-production.up.railway.app";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
