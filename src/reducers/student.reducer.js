import { LOCAL_SIGN_IN, SIGN_IN, SIGN_OUT } from "../actions/student.action";
import { LocalStorage } from "../utils/localstorage.util";

const studentReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      LocalStorage.add("student", action.payload.student);
      LocalStorage.add("token", action.payload.token);
      return { ...state, ...action.payload };
    case SIGN_OUT:
      LocalStorage.clear();
      return { ...state, student: null };
    case LOCAL_SIGN_IN:
      return { ...state, ...action.payload };
    default:
      throw new Error("Invalid action type");
  }
};

export default studentReducer;
