import axios from "axios";

export const fomo = axios.create({
  baseURL: "http://localhost:4000/api",
});
