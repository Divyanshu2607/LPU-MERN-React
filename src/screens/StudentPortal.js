import { Link } from "react-router-dom";

const StudentPortal = () => {
  return (
    <>
      <h1>Welcome to Student Portal</h1>
      <Link to={"/admin/add-book"}>Add Book</Link>
      <Link to={"/admin/add-book"}>Issue Book</Link>
      <Link to={"/admin/add-book"}>Return Book</Link>
    </>
  );
};

export default StudentPortal;
