import { LibraryClient } from "../client/LibraryAppClient";

export const addBook = async (book) => {
  return await LibraryClient.post("/book/add", { ...book });
};
