import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context as StudentContext } from "../contexts/StudentContext";

const StudentPortal = () => {
  const {
    state: { student },
  } = useContext(StudentContext);
  return (
    <>
      <h1>Welcome, {student?.firstName} {student?.lastName}!</h1>
      <Link to={"/admin/add-book"}>Add Book</Link>
      <Link to={"/admin/add-book"}>Issue Book</Link>
      <Link to={"/admin/add-book"}>Return Book</Link>
    </>
  );
};

export default StudentPortal;
