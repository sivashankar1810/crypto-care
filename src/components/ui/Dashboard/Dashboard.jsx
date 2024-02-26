import React from "react";
import Home from "../Home/Home";
import News from "../News/News";
import VideoFrame from "./VideoFrame";

const Dashboard = (props) => {
  return (
    <>
      <Home setRegion={props.setRegion} region={props.region} />
      {/* <News simplified /> */}
      <VideoFrame />
    </>
  );
};

export default Dashboard;
