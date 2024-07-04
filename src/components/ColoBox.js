import { Component } from "react";

class ColorBox extends Component {
  componentDidMount = () => {
    console.log("Created new Color Box");
  };

  componentWillUnmount = () => {
    console.log("Removed color box");
  };

  render = () => {
    return (
      <div
        style={{
          background: this.props.color,
          height: "100px",
          width: "100px",
          margin: "5px",
          borderRadius: "5px",
        }}
      >
        {" "}
      </div>
    );
  };
}

export default ColorBox;
