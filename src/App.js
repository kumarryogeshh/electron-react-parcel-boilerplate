import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Custom from "./components/Custom";
import "./custom.css";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Custom />
      </div>
    );
  }
}
export default App;
