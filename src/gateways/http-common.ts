import axios from "axios";

export const http = axios.create({
  baseURL: `http://localhost:4445/`
  // headers: {
  //     Authorization: 'Bearer {token}'
  // }
});
