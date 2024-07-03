import { Component } from "react";

class CollegeSection extends Component {
  render() {
    return (
      <>
        <div>
          <h3>{this.props.name}</h3>
          <img alt="" src={this.props.image} style={{ maxWidth: "700px" }} />
          <div>
            <p>{this.props.description}</p>
            <div style={{ textAlign: "right" }}>
              {this.props.isHidden === false && <button>Hidden</button>}
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

/**
 * State:
 * State is a variable, that stores some data
 * State is linked to a component
 * Every instance of a component will have its own state
 * We store that data in state, which is supposed to change.
 * If state data is changed, then the component gets updated!!
 */
