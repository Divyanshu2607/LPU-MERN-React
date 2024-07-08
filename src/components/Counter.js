import { useReducer } from "react";
import { DECREASE, INCREASE } from "../actions/counter.action";
import counterReducer from "../reducers/counter.reducer";

const Counter = (props) => {
  /**
   * useState is a hook that brings the power of state in a F comp.
   * It takes 1 arg.. which rep. the initial value of state
   * It returns an array that contains only 2 el
   * arr[0] = state var
   * arr[1] = function to change state
   */
  // const [state, setState] = useState({ count: props.startVal });

  const [state, dispatch] = useReducer(counterReducer, {
    count: props.startVal,
  });

  return (
    <>
      <h1>The count is: {state.count}</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: INCREASE });
          }}
        >
          {props.btn1Text}
        </button>
        <button
          onClick={() => {
            dispatch({ type: DECREASE });
          }}
        >
          {props.btn2Text}
        </button>
      </div>
    </>
  );
};

export default Counter;

/**
 * In F components, there are 2 types of hooks.
 * 1. That deal with state - useState | useReducer
 * 2. That don't deal with state - useEffect
 *
 * useReducer is a function, that will return an array which contains two values
 * 1. arr[0] is the state
 * 2. arr[1] is a function that will be used to change the state (it is called dispatch)
 *
 * useReducer takes 2 arguments
 * 1. A function that contains logic to change the state (called reducer)
 * 2. Initial value of state
 *
 * reducer
 * It is a function that takes 2 arguments to change the state
 * 1. The state
 * 2. An action object
 * The return value of the reducer function is the new value of state
 *
 * Action object
 * It is an object that contains two properties
 * 1. type: Which tells us what type of state update we have to do
 * 2. payload (optional): Which tells us any info needed for the new value of state
 *
 * Dispatch Func
 * It is responsible for the state change
 * It takes only 1 arg which is the action object
 */
