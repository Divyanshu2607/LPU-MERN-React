import { useState } from "react";

const ToDoListForm = (props) => {
  const [task, setTask] = useState({ name: "", description: "" });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  return (
    <>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(task);
          setTask({ name: "", description: "" });
        }}
      >
        <div className="field">
          <label>Task Name</label>
          <input
            type="text"
            name="name"
            placeholder="Task Name"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Task Description</label>
          <textarea
            rows="2"
            spellCheck="false"
            data-ms-editor="true"
            control-id="ControlID-32"
            name="description"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ToDoListForm;
