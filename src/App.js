import { Component } from "react";
import "./App.css";
import ColorScreen from "./screens/ColorScreen";
import CounterScreen from "./screens/CounterScreen";
import CartScreen from "./screens/CartScreen";

class App extends Component {
  render() {
    // return <CounterScreen />;
    return (
      <div style={{ padding: "2vh 10%" }}>
        {/* <ColorScreen />
        <CounterScreen /> */}
        <CartScreen />
      </div>
    );
  }
}

export default App;
