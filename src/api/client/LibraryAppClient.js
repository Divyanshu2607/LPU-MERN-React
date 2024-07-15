import axios from "axios";
import { LocalStorage } from "../../utils/localstorage.util";

export const LibraryClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    Authorization: `Bearer: ${LocalStorage.get("token")}`,
  },
});
