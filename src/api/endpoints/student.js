import { isValidCredential } from "../../validator/form.validator";
import { LibraryClient } from "../client/LibraryAppClient";

export const loginStudent = async (credentials) => {
  if (!isValidCredential(credentials)) {
    throw new Error("Invalid Credentials");
  }
  return await LibraryClient.post("/student/login", credentials);
};

export const getAllStudents = async () =>
  await LibraryClient.get("/student/get/all");
