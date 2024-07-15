import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  Context as StudentContext,
  Provider as StudentProvider,
} from "./contexts/StudentContext";
import AddBookScreen from "./screens/AddBookScreen";
import BookIssueListScreen from "./screens/BookIssueListScreen";
import BookListScreen from "./screens/BookListScree";
import CounterScreen from "./screens/CounterScreen";
import LoginScreen from "./screens/LoginScreen";
import StudentPortal from "./screens/StudentPortal";
import ToDoListScreen from "./screens/ToDoListScreen";

const router = createBrowserRouter([
  {
    path: "/todo",
    element: <ToDoListScreen />,
  },
  {
    path: "/counter",
    element: <CounterScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/home",
    element: <StudentPortal />,
  },
  {
    path: "/admin/add-book",
    element: <AddBookScreen />,
  },
  {
    path: "/book-issue-list",
    element: <BookIssueListScreen />,
  },
  {
    path: "/admin/books",
    element: <BookListScreen />,
  },
]);

const App = () => {
  const {
    state: { student },
    localSignIn,
  } = useContext(StudentContext);

  useEffect(() => {
    if (!student) {
      localSignIn();
    }
  }, []);

  return (
    <div style={{ padding: "2vh 10%" }}>
      <RouterProvider router={router} />
    </div>
  );
};

const Test = () => {
  return (
    <StudentProvider>
      <App />
    </StudentProvider>
  );
};

export default Test;
