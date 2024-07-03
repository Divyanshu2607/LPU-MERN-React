import { Component } from "react";

class CollegeSection extends Component {
  render() {
    return (
      <>
        <div>
          <h3>{this.props.name}</h3>
          <div>
            <p>{this.props.description}</p>
            <div style={{ textAlign: "right" }}>
              <button>
                <a href={`https://${this.props.buttonLink}`}>Click</a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CollegeSection;
