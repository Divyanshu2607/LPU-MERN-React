import { useEffect, useState } from "react";
import ColorBox from "../components/ColorBox";

const ColorScreen = () => {
  const [state, setState] = useState({ colors: [] });
  const [headerInfo, setHeaderInfo] = useState({
    color: "black",
    boxClicked: null,
  });

  useEffect(() => {
    console.log("Color Screen was updated");
  });

  const onButtonClick = (color, boxNumber) => {
    setHeaderInfo({ color: color, boxClicked: boxNumber });
  };

  const showColorBoxes = () => {
    let colorBoxes = state.colors.map((el, index) => {
      return (
        <ColorBox
          color={el}
          key={index}
          onButtonClick={() => {
            onButtonClick(el, index + 1);
          }}
        />
      );
    });
    return colorBoxes;
  };

  const generateNewColor = () => {
    // 8-bits -> 16 million colors
    // rgb(abc, abc, abc)
    // r -> 8 bits (0 - 255)
    // g -> 8 bits (0 - 255)
    // b -> 8 bits (0 - 255)
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 256);
  };

  const handleClick = () => {
    const newColor = generateNewColor();
    setState({ colors: [...state.colors, newColor] });
  };

  return (
    <>
      <h1 style={{ color: headerInfo.color }}>
        Color: {state.colors.length} &nbsp;
        {headerInfo.boxClicked && (
          <span style={{ fontSize: "1rem" }}>
            Box Clicked: {headerInfo.boxClicked}
          </span>
        )}
      </h1>

      <div>
        <button
          style={{
            borderRadius: "30px",
            padding: "5px 15px",
            border: "0",
            color: "white",
            background: "black",
          }}
          onClick={handleClick}
        >
          Add color
        </button>
        <button
          style={{
            borderRadius: "30px",
            padding: "5px 15px",
            border: "0",
            color: "white",
            background: "black",
          }}
          onClick={() => {
            if (state.colors.length) {
              let colorArr = [...state.colors];
              colorArr.pop();
              setState({ colors: colorArr });
            }
          }}
        >
          Delete color
        </button>
        <div
          style={{
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {showColorBoxes()}
        </div>
      </div>
    </>
  );
};

// class ColorScreen extends Component {
//   // Create a state that is an array containing colors
//   // On click of Add color, add new color to the state
//   // Iterate over the state to render boxes

//   state = {
//     colors: [],
//   };

//   componentDidUpdate = () => {
//     console.log("Color Screen was updated");
//   };

//   showColorBoxes = () => {
//     let colorBoxes = this.state.colors.map((el, index) => {
//       return <ColorBox color={el} key={index} />;
//     });
//     return colorBoxes;
//   };

//   generateNewColor = () => {
//     // 8-bits -> 16 million colors
//     // rgb(abc, abc, abc)
//     // r -> 8 bits (0 - 255)
//     // g -> 8 bits (0 - 255)
//     // b -> 8 bits (0 - 255)
//     return `rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`;
//   };

//   getRandomNumber = () => {
//     return Math.floor(Math.random() * 256);
//   };

//   handleClick = () => {
//     const newColor = this.generateNewColor();
//     this.setState({ colors: [...this.state.colors, newColor] });
//   };

//   render = () => {
//     return (
//       <>
//         <h1>Color: {this.state.colors.length}</h1>
//         <div>
//           <button
//             style={{
//               borderRadius: "30px",
//               padding: "5px 15px",
//               border: "0",
//               color: "white",
//               background: "black",
//             }}
//             onClick={this.handleClick}
//           >
//             Add color
//           </button>
//           <button
//             style={{
//               borderRadius: "30px",
//               padding: "5px 15px",
//               border: "0",
//               color: "white",
//               background: "black",
//             }}
//             onClick={() => {
//               if (this.state.colors.length) {
//                 let colorArr = [...this.state.colors];
//                 colorArr.pop();
//                 this.setState({ colors: colorArr });
//               }
//             }}
//           >
//             Delete color
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "10px",
//             }}
//           >
//             {this.showColorBoxes()}
//           </div>
//         </div>
//       </>
//     );
//   };
// }

export default ColorScreen;

/**
 * Lifecycle of a component.
 * Birth -> Mounting of component -> As soon as it appears on the screen
 * Life Updates -> Component Update -> State
 * Death -> Unmounting of component -> As soon as it is removed from the screen
 */

/**
 * In a C based comp., we have a lot of members of the Component class that we can use
 * Eg: state, setState, componentDidMount, etc.
 *
 * In a F based comp., we cannot use the members of the Component class, because no inheritance.
 * Thus, F comp are weak!!
 *
 * In order to make use of C based functionalities in a F based comp., we have to depend on other means
 * These means are called HOOKS!
 */
