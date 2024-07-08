import { useState } from "react";

const Counter = (props) => {
  /**
   * useState is a hook that brings the power of state in a F comp.
   * It takes 1 arg.. which rep. the initial value of state
   * It returns an array that contains only 2 el
   * arr[0] = state var
   * arr[1] = function to change state
   */
  const [state, setState] = useState({ count: props.startVal });

  return (
    <>
      <h1>The count is: {state.count}</h1>
      <div>
        <button
          onClick={() => {
            let count = state.count;
            count = props.btn1OnClick(count);
            setState({ count });
          }}
        >
          {props.btn1Text}
        </button>
        <button
          onClick={() => {
            let count = state.count;
            count = props.btn2OnClick(count);
            setState({ count });
          }}
        >
          {props.btn2Text}
        </button>
      </div>
    </>
  );
};

export default Counter;
