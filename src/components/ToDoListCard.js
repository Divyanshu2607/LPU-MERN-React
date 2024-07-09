const ToDoListCard = ({ task, handleStatus, index, deleteTask }) => {
  return (
    <>
      <div className={task.isComplete ? "card done" : "card"}>
        <div className="content">
          <div className="header">{task.name}</div>
          <div className="description">{task.description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              className="ui basic green button"
              onClick={() => handleStatus(index, task.isComplete)}
            >
              {task.isComplete ? "Undo" : "Mark as done"}
            </div>
            <div
              className="ui basic red button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoListCard;
