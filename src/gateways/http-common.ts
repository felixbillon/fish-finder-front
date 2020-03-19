import axios from "axios";

export const http = axios.create({
  baseURL: `http://${process.env.VUE_APP_API_BASE_URL}:${process.env.VUE_APP_API_PORT}/`
});
