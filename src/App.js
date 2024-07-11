import { useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddBookScreen from "./screens/AddBookScreen";
import CounterScreen from "./screens/CounterScreen";
import LoginScreen from "./screens/LoginScreen";
import StudentPortal from "./screens/StudentPortal";
import ToDoListScreen from "./screens/ToDoListScreen";
import {
  Context as StudentContext,
  Provider as StudentProvider,
} from "./contexts/StudentContext";

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
]);

const App = () => {
  const { localSignIn } = useContext(StudentContext);

  useEffect(() => {
    localSignIn();
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
