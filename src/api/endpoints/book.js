import { LibraryClient } from "../client/LibraryAppClient";

export const addBook = async (book) => {
  return await LibraryClient.post("/book/add", { ...book });
};

export const getAllBooks = async () => await LibraryClient.get("/book/get/all");

export const getBookByIsbnNo = async (isbnNumber) =>
  await LibraryClient.get(`/book/${isbnNumber}`);

export const updateBook = async (bookObj) =>
  await LibraryClient.put("/book", { ...bookObj });
