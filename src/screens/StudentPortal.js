import { useContext } from "react";
import { Context as StudentContext } from "../contexts/StudentContext";
import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
  const {
    state: { student },
  } = useContext(StudentContext);

  const representativeSections = [
    {
      path: "/admin/add-book",
      title: "Add Book",
      description: "Add a new book",
    },
    {
      path: "/admin/books",
      title: "Book List",
      description: "Show all books",
    },
    {
      path: "/admin/issue-book",
      title: "Issue a new book",
      description: "Issue a new book to a student",
    },
  ];

  const showClassRepresentativeSections = () => {
    return representativeSections.map((section, index) => {
      return (
        <div
          key={index * 2}
          className="card"
          onClick={() => navigate(section.path)}
          style={{ cursor: "pointer" }}
        >
          <div className="content">
            <div className="header">{section.title}</div>
            <div className="description">{section.description}</div>
          </div>
        </div>
      );
    });
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
