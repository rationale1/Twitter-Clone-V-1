import React from "react";
import "./StyleSheet/index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar";
import Feeds from "./components/Feeds/Feeds";
import Widget from "./components/Widget/Widget";

const App = () => {
  return (
    <div className="app">
      <SideBar />

      <Feeds />

      <Widget />
    </div>
  );
};

export default App;
