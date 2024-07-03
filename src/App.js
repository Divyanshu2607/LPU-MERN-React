import { Component } from "react";
import "./App.css";
import Test from "./Test";
import CollegeSection from "./components/CollegeSection";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "2vh 10%" }}>
        <div>
          <h1>Welcome to LPU</h1>
        </div>
        <div className="myContainer">
          <CollegeSection
            name="Hostel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames. Non arcu risus quis varius quam quisque id diam vel. Condimentum mattis pellentesque id nibh. Sem et tortor consequat id porta. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim sed faucibus turpis in eu mi bibendum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
            buttonLink="www.google.com"
          />
          <CollegeSection
            name="Administration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames. Non arcu risus quis varius quam quisque id diam vel. Condimentum mattis pellentesque id nibh. Sem et tortor consequat id porta. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim sed faucibus turpis in eu mi bibendum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
            buttonLink="www.bing.com"
          />
          <CollegeSection
            name="Placement"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames. Non arcu risus quis varius quam quisque id diam vel. Condimentum mattis pellentesque id nibh. Sem et tortor consequat id porta. Congue nisi vitae suscipit tellus mauris a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Cras ornare arcu dui vivamus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim sed faucibus turpis in eu mi bibendum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.F"
            buttonLink="www.facebook.com"
          />
        </div>
        <Test />
      </div>
    );
  }
}

export default App;
