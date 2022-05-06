import React from "react";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import SideBar from "../../components/SideBar/SideBar";
import "./home.css";

const Home = () => {
  return (
    <div className="home d-flex">
      <SideBar />

      <Feed />

      <RightBar />
    </div>
  );
};

export default Home;
