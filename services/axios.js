import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 && Router.pathname !== "/login") {
      Cookies.remove("access_token");
      Router.replace("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

instance.defaults.headers.post["Accept"] = "application/json";

export default instance;
