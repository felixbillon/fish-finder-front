import axios from "axios";

export const http = axios.create({
  baseURL: `http://${process.env.API_BASE_URL}:${process.env.API_PORT}/`
  // headers: {
  //     Authorization: 'Bearer {token}'
  // }
});
