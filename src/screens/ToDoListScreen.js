import { useReducer } from "react";
import ToDoListCard from "../components/ToDoListCard";
import ToDoListForm from "../components/ToDoListForm";
import toDoReducer from "../reducers/todo.reducer";
import {
  ADD_TASK,
  DELETE_TASK,
  MARK_DONE,
  MARK_UNDONE,
} from "../actions/todo.action";

const ToDoLostScreen = () => {
  const [taskList, dispatch] = useReducer(toDoReducer, []);

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: { task } });
  };

  const handleStatus = (index, isComplete) =>
    dispatch({
      type: isComplete ? MARK_UNDONE : MARK_DONE,
      payload: { index },
    });

  const deleteTask = (index) =>
    dispatch({ type: DELETE_TASK, payload: { index } });

  return (
    <>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <div>
        <ToDoListForm onSubmit={(task) => addTask(task)} />
      </div>
      <section style={{ padding: "3vh 0" }}>
        <div className="ui cards">
          {taskList.map((task, index) => {
            return (
              <ToDoListCard
                key={index}
                index={index}
                task={task}
                handleStatus={handleStatus}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ToDoLostScreen;
