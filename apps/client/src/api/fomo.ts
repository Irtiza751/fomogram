import axios from "axios";

export const fomo = axios.create({
  baseURL: "/api/proxy",
  withCredentials: true,
});
