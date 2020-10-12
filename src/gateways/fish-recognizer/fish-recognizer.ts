import axios from "axios";

const http = axios.create({
  baseURL: `http://localhost:3000`
});

const formData = new FormData();
const file = new Blob(["text"], { type: "text/plain" });
formData.append("file", file, "file.txt");

export const recognize = () => http.post<boolean>("recognizer", formData);
