import { createContext, useReducer } from "react";

const createDataContext = (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // { signInStudent: fn, signOutStudent: fn } -> actions
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    /**
     * boundActions = {
     *  signInStudent: async (credential) => {
            try {
              const { student, token } = await loginStudent(credential);
              dispatch({ type: SIGN_IN, payload: { student, token } });
            } catch (err) {
              dispatch({ type: SIGN_OUT });
            }
          };
     *  }
        signOutStudent: () => {
            dispatch({ type: SIGN_OUT });
          };
     */

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {props.children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

export default createDataContext;
