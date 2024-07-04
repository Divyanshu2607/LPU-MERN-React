import { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.startVal
  };

  render = () => {
    return (
      <>
        <h1>The count is: {this.state.count}</h1>
        <div>
          <button
            onClick={() => {
              let count = this.state.count;
              count = this.props.btn1OnClick(count);
              this.setState({ count });
            }}
          >
            {this.props.btn1Text}
          </button>
          <button
            onClick={() => {
              let count = this.state.count;
              count = this.props.btn2OnClick(count);
              this.setState({ count });
            }}
          >
            {this.props.btn2Text}
          </button>
        </div>
      </>
    );
  };
}

export default Counter;
