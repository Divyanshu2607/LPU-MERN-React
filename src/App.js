import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CounterScreen from "./screens/CounterScreen";
import LoginScreen from "./screens/LoginScreen";
import ToDoListScreen from "./screens/ToDoListScreen";
import StudentPortal from "./screens/StudentPortal";
import AddBookScreen from "./screens/AddBookScreen";

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
  return (
    <div style={{ padding: "2vh 10%" }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
