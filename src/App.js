import { Component } from "react";
import "./App.css";
import ColorScreen from "./screens/ColorScreen";

class App extends Component {
  render() {
    // return <CounterScreen />;
    return (
      <div style={{ padding: "2vh 10%" }}>
        <ColorScreen />
      </div>
    );
  }
}

export default App;
