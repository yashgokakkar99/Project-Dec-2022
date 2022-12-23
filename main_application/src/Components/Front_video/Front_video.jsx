import React from "react";
import videoBg from "../../assets/Images/bgvid.mp4";

const Front_video = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};

export default Front_video;
