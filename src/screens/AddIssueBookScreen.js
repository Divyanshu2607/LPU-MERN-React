import { useEffect, useState } from "react";
import { getAllBooks } from "../api/endpoints/book";
import { getAllStudents } from "../api/endpoints/student";
import { createBookIssue } from "../api/endpoints/book-issue";

const AddIssueBookScreen = () => {
  const [bookIssue, setBookIssue] = useState({});
  const [optionList, setOptionList] = useState({
    books: [],
    students: [],
  });
  const [status, setStatus] = useState({ message: "", status: "unknown" });

  const showMessage = () => {
    let toReturn = null;
    if (status.status === "unknown") {
      return;
    } else if (status.status === true) {
      toReturn = (
        <div className="ui form success" style={{ marginTop: "1vh" }}>
          <div className="ui success message">
            <div className="header">Success</div>
            <p>{status.message}</p>
          </div>
        </div>
      );
    } else {
      toReturn = (
        <div className="ui form error" style={{ marginTop: "1vh" }}>
          <div className="ui error message">
            <div className="header">Error</div>
            <p>{status.message}</p>
          </div>
        </div>
      );
    }
    setTimeout(() => setStatus({ message: "", status: "unknown" }), 5000);
    return toReturn;
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data: books } = await getAllBooks();
      const { data: students } = await getAllStudents();
      setOptionList({ books, students });
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setBookIssue({ ...bookIssue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add Book Issue</h1>
      <form
        className="ui form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await createBookIssue(bookIssue);
            setStatus({ status: true, message: "Successfully saved book" });
          } catch (err) {
            console.error(err);
            setStatus({
              status: false,
              message: "There was an error saving the book",
            });
          }
        }}
      >
        <h4 className="ui dividing header">Book Issue Information</h4>

        <div className="field">
          <label>Student</label>
          <select
            className="ui fluid dropdown"
            value={bookIssue.studentRegNo}
            name="studentRegNo"
            onChange={handleChange}
          >
            <option value="">Select Student</option>
            {optionList.students.map((el) => (
              <option value={el.registrationNumber}>
                {el.registrationNumber} - {el.firstName} {el.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Book</label>
          <select
            className="ui fluid dropdown"
            value={bookIssue.bookIsbnNo}
            name="bookIsbnNo"
            onChange={handleChange}
          >
            <option value="">Select Book</option>
            {optionList.books
              .filter((book) => book.count > 0)
              .map((el) => (
                <option value={el.isbn}>
                  {el.isbn} - {el.title}
                </option>
              ))}
          </select>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
        {showMessage()}
      </form>
    </>
  );
};

export default AddIssueBookScreen;
