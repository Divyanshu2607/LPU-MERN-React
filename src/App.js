import { Component } from "react";
import "./App.css";
import Test from "./Test";
import CollegeSection from "./components/CollegeSection";
import placementPhoto from "./images/LPU-Placement.jpg";
import adminPhoto from "./images/lpu-online-mba.jpg";
import hostelPhoto from "./images/the-bee-hostel.jpg";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "2vh 10%" }}>
        {/* <div>
          <h1>Welcome to LPU</h1>
        </div>
        <div className="myContainer">
          <CollegeSection
            name="Hostel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames. Non arcu risus quis varius quam quisque id diam vel. Condimentum mattis pellentesque id nibh. Sem et tortor consequat id porta. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim sed faucibus turpis in eu mi bibendum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
            buttonLink="www.google.com"
            image={hostelPhoto}
          />
          <CollegeSection
            name="Administration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames. Non arcu risus quis varius quam quisque id diam vel. Condimentum mattis pellentesque id nibh. Sem et tortor consequat id porta. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim sed faucibus turpis in eu mi bibendum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
            buttonLink="www.bing.com"
            image={adminPhoto}
            isHidden={false}
          />
          <CollegeSection
            name="Placement"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames. Non arcu risus quis varius quam quisque id diam vel. Condimentum mattis pellentesque id nibh. Sem et tortor consequat id porta. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim sed faucibus turpis in eu mi bibendum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.F"
            buttonLink="www.facebook.com"
            image={placementPhoto}
          />
        </div>
        <Test /> */}
        <Counter
          btn1Text="Increase"
          btn2Text="Decrease"
          btn1OnClick={(count) => {
            return count + 1;
          }}
          btn2OnClick={(count) => {
            if (count <= 1) {
              return 0;
            }
            return count - 2;
          }}
          startVal={0}
        />
        {/* Pass the text inside the button and the function to execute on click as a prop */}
        <Counter
          btn1Text="Multiply by 2"
          btn2Text="Divide by 2"
          btn1OnClick={(count) => {
            return count * 2;
          }}
          btn2OnClick={(count) => {
            if (count / 2 < 1) {
              return 1;
            }
            return count / 2;
          }}
          startVal={1}
        />
        {/* Multiply by 2 and Divide by 2 */}
        <Counter
          btn1Text="Square"
          btn2Text="Square Root"
          btn1OnClick={(count) => {
            return count * count;
          }}
          btn2OnClick={(count) => {
            if (Math.sqrt(count) < 1) {
              return 1;
            }
            return Math.sqrt(count);
          }}
          startVal={2}
        />
        {/* Power of 2 and square root */}
      </div>
    );
  }
}

export default App;
