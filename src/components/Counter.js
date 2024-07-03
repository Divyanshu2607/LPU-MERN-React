import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render = () => {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        <div>
          <button onClick={this.increaseCount}>Increase</button>
          <button>Decrease</button> {/* Decrease by 2 but never less than 0 */}
        </div>
      </>
    );
  };
}

export default Counter;
