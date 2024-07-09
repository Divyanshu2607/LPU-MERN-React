import {
  ADD_TASK,
  DELETE_TASK,
  MARK_DONE,
  MARK_UNDONE,
} from "../actions/todo.action";

const toDoReducer = (state, action) => {
  const type = action.type;
  const payload = action.payload;
  let currentList = [...state];
  let index = 0;
  switch (type) {
    case ADD_TASK:
      return [...state, { ...payload.task, isComplete: false }];
    case DELETE_TASK:
      index = payload.index;
      currentList.splice(index, 1);
      return [...currentList];
    case MARK_DONE:
      index = payload.index;
      currentList[index].isComplete = true;
      return [...currentList];
    case MARK_UNDONE:
      index = payload.index;
      currentList[index].isComplete = false;
      return [...currentList];
    default:
      throw new Error("Use valid action");
  }
};

export default toDoReducer;
