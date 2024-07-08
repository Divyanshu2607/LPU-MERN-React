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
      {/* Pass the text inside the button and the function to execute on click as a prop */}
      {/* <Counter
        btn1Text="Multiply by 2"
        btn2Text="Divide by 2"
        btn1OnClick={(count) => {
          return count * 2;
        }}
        btn2OnClick={(count) => {
          if (count / 2 < 1) {
            return 1;
          }
          return count / 2;
        }}
        startVal={1}
      /> */}
      {/* Multiply by 2 and Divide by 2 */}
      {/* <Counter
        btn1Text="Square"
        btn2Text="Square Root"
        btn1OnClick={(count) => count * count}
        btn2OnClick={(count) => {
          if (Math.sqrt(count) < 1) {
            return 1;
          }
          return Math.sqrt(count);
        }}
        startVal={2}
      /> */}
      {/* Power of 2 and square root */}
    </>
  );
};

export default CounterScreen;
