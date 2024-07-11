import { Link } from "react-router-dom";
import Counter from "../components/Counter";

const CounterScreen = () => {
  return (
    <>
      <Counter
        btn1Text="Increase"
        btn2Text="Decrease"
        btn1OnClick={(count) => {
          return count + 1;
        }}
        btn2OnClick={(count) => {
          if (count <= 1) {
            return 0;
          }
          return count - 2;
        }}
        startVal={0}
      />
      <Link to={"/todo"}>Todo</Link>
    </>
  );
};

export default CounterScreen;
