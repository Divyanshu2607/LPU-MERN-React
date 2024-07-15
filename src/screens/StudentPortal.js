import { useContext } from "react";
import { Context as StudentContext } from "../contexts/StudentContext";
import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
  const {
    state: { student },
  } = useContext(StudentContext);

  const showClassRepresentativeSections = () => {
    return (
      <>
        <div
          className="card"
          onClick={() => navigate("/admin/add-book")}
          style={{ cursor: "pointer" }}
        >
          <div className="content">
            <div className="header">Add Book</div>
            <div className="description">Add a new book</div>
          </div>
        </div>
        <div
          className="card"
          onClick={() => navigate("/admin/books")}
          style={{ cursor: "pointer" }}
        >
          <div className="content">
            <div className="header">Book List</div>
            <div className="description">Show all books</div>
          </div>
        </div>
      </>
    );
  };

  const navigate = useNavigate();
  return (
    <>
      <h1>
        Welcome, {student?.firstName} {student?.lastName}!
      </h1>
      <div className="ui cards">
        <div
          className="card"
          onClick={() => navigate("/book-issue-list")}
          style={{ cursor: "pointer" }}
        >
          <div className="content">
            <div className="header">Your Issued Books</div>
            <div className="description">A list of your issued books</div>
          </div>
        </div>
        {student.isClassRepresentative && showClassRepresentativeSections()}
      </div>
    </>
  );
};

export default StudentPortal;
