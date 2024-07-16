import { LibraryClient } from "../client/LibraryAppClient";

export const getBookIssueListByFilters = (filterObj) => {
  return LibraryClient.get("/issue-record/get/filter", {
    params: { ...filterObj },
  });
};

export const createBookIssue = async (bookIssueObj) =>
  await LibraryClient.post("/issue-record/add", { ...bookIssueObj });

export const submitBook = (bookIssueId) => {
  return LibraryClient.patch(`/issue-record/submit/${bookIssueId}`);
};
