import { Component } from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";

class App extends Component {
  render() {
    // return <CounterScreen />;
    return (
      <div style={{ padding: "2vh 10%" }}>
        <LoginScreen />
      </div>
    );
  }
}

export default App;
