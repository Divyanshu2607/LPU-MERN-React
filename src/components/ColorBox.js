import { useEffect } from "react";

const ColorBox = (props) => {
  useEffect(() => {
    console.log("Created new Color Box");
    return () => {
      console.log("Removed color box");
    };
  }, []);

  /**
   * useEffect is a function that takes two arguments
   * 1. An effect function which is function that has some logic
   * 2. OPTIONAL: An array of variables
   *
   * NOTE: The effect function may return a function. The returned function acts
   * as componentWillUnmount
   *
   * Effect function is a alternative of componentDidMount
   * and componentWillUpdate
   *
   * 2nd variable
   * 1. Not passed -> effect will run at mount and every update
   * 2. Empty array was passed -> effect will run only at mount
   * 3. Non-Empty array was passed -> effect will run at mount and only when any variable (state)
   *    in the array is updated
   */

  return (
    <div
      style={{
        background: props.color,
        height: "100px",
        width: "100px",
        margin: "5px",
        borderRadius: "5px",
      }}
    >
      {" "}
      <button onClick={props.onButtonClick}>Click Me</button>
    </div>
  );
};

export default ColorBox;
