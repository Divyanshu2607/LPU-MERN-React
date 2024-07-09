import { Component } from "react";
import "./App.css";
import ToDoLostScreen from "./screens/ToDoListScreen";

class App extends Component {
  render() {
    // return <CounterScreen />;
    return (
      <div style={{ padding: "2vh 10%" }}>
        <ToDoLostScreen />
      </div>
    );
  }
}

export default App;
