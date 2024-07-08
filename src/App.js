import { Component } from "react";
import "./App.css";
import ColorScreen from "./screens/ColorScreen";
import CounterScreen from "./screens/CounterScreen";

class App extends Component {
  render() {
    // return <CounterScreen />;
    return (
      <div style={{ padding: "2vh 10%" }}>
        <ColorScreen />
        <CounterScreen />
      </div>
    );
  }
}

export default App;
