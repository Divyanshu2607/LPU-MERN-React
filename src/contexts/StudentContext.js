import { LOCAL_SIGN_IN, SIGN_IN, SIGN_OUT } from "../actions/student.action";
import { loginStudent } from "../api/endpoints/student";
import studentReducer from "../reducers/student.reducer";
import { LocalStorage } from "../utils/localstorage.util";
import createDataContext from "./createDataContext";

const signInStudent = (dispatch) => {
  return async (credential) => {
    try {
      const { student, token } = await loginStudent(credential);
      dispatch({ type: SIGN_IN, payload: { student, token } });
    } catch (err) {
      dispatch({ type: SIGN_OUT });
    }
  };
};

const signOutStudent = (dispatch) => {
  return () => {
    dispatch({ type: SIGN_OUT });
  };
};

const localSignIn = (dispatch) => {
  return () => {
    const student = LocalStorage.get("student");
    const token = LocalStorage.get("token");
    if (!student || !token) {
      return false;
    } else {
      dispatch({ type: LOCAL_SIGN_IN, payload: { student, token } });
    }
  };
};

export const { Context, Provider } = createDataContext(
  studentReducer,
  { signInStudent, signOutStudent, localSignIn },
  { student: null }
);
