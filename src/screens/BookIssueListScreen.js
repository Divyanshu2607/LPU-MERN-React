import { useEffect, useState, useContext } from "react";
import {
  getBookIssueListByFilters,
  submitBook,
} from "../api/endpoints/book-issue";
import { Context as StudentContext } from "../contexts/StudentContext";
import { currencyFormat } from "../utils/currency.util";

const BookIssueListScreen = () => {
  const [bookIssueList, setBookIssueList] = useState([]);

  const {
    state: { student },
  } = useContext(StudentContext);

  useEffect(() => {
    if (student !== null) {
      const fetchBookIssueList = async () => {
        try {
          const { data: issuedBookList } = await getBookIssueListByFilters({
            studentRegNo: student.registrationNumber,
          });
          setBookIssueList(issuedBookList);
        } catch (err) {
          console.error(err);
          setBookIssueList([]);
        }
      };
      fetchBookIssueList();
    }
  }, [student]);

  const isOverdue = (returnDate) => {
    return new Date() > returnDate;
  };

  const showIssuedBooks = () => {
    return bookIssueList.map((bookIssueInstance, index) => {
      const [issueDate, returnDate] = [
        new Date(bookIssueInstance.issueDate),
        new Date(bookIssueInstance.returnDate),
      ];

      return (
        <tr key={index * 2}>
          <td>{bookIssueInstance.studentRegNo}</td>
          <td>{bookIssueInstance.bookIsbnNo}</td>
          <td>{bookIssueInstance.book.title}</td>
          <td>{issueDate.toLocaleDateString()}</td>
          <td
            className={
              bookIssueInstance.status === "Issued" && isOverdue(returnDate)
                ? "overdue"
                : ""
            }
          >
            {returnDate.toLocaleDateString()}
          </td>
          <td>{bookIssueInstance.status}</td>
          <td>{currencyFormat(bookIssueInstance.lateFine)}</td>
          <td>
            {bookIssueInstance.status === "Issued" ? (
              <button
                className="ui primary button"
                onClick={async () => {
                  try {
                    const { data: lateFine } = await submitBook(
                      bookIssueInstance._id
                    );
                    const bookIssueListCopy = [...bookIssueList];
                    bookIssueListCopy[index].status = "Returned";
                    bookIssueListCopy[index].lateFine = lateFine;
                    setBookIssueList(bookIssueListCopy);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                Return
              </button>
            ) : (
              "N/A"
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h2 className="ui header">Your Issued Books</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Student Reg No</th>
            <th>Book ISBN</th>
            <th>Book Name</th>
            <th>Issue Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Late Fine</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{showIssuedBooks()}</tbody>
      </table>
    </>
  );
};

export default BookIssueListScreen;
