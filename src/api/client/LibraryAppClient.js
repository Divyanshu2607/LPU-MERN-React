import axios from "axios";

export const LibraryClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});
