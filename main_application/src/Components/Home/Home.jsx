import React from "react";
import "./Home.css";
import img1 from "../../assets/Images/frontend.png";
import img2 from "../../assets/Images/backend.png";
import img3 from "../../assets/Images/dsa.png";
import img4 from "../../assets/Images/android.png";
import img5 from "../../assets/Images/cloud.png";
import img6 from "../../assets/Images/cyber.png";
import img7 from "../../assets/Images/ai.png";
import img8 from "../../assets/Images/ml.png";
import img9 from "../../assets/Images/graphics.png";
import Main from "../main/Main.jsx";
import Backend from "../Backend/Backend";
import { useState } from "react";

const Home = () => {
  const components = [
    <Main/>, <Backend/>
  ]
  const [index, setIndex] = useState(0);

  return (
    <>
    <section id="Home">
      <div className="maindiv">
        <div className="rect1" onClick={()=>setIndex(0)}>
          <h4>Front-end</h4>
          <div className="i1">
            <img className="image1" src={img1}></img>
          </div>
        </div>
        <div className="rect2" onClick={()=>setIndex(1)}>
          <h4>Backend</h4>
          <div className="i1">
            <img className="image2" src={img2}></img>
          </div>
        </div>
        <div className="rect3">
          <h4>DSA</h4>
          <div className="i1">
            <img className="image3" src={img3}></img>
          </div>
        </div>
        <div className="rect4">
          <h4>Android Dev</h4>
          <div className="i1">
            <img className="image4" src={img4}></img>
          </div>
        </div>
        <div className="rect5">
          <h4>Cloud computing</h4>
          <div className="i1">
            <img className="image5" src={img5}></img>
          </div>
        </div>
        <div className="rect6">
          <h4>AI</h4>
          <div className="i1">
            <img className="image6" src={img6}></img>
          </div>
        </div>
        <div className="rect7">
          <h4>ML</h4>
          <div className="i1">
            <img className="image7" src={img7}></img>
          </div>
        </div>
        <div className="rect8">
          <h4>Cyber security</h4>
          <div className="i1">
            <img className="image8" src={img8}></img>
          </div>
        </div>
        <div className="rect9">
          <h4>Graphics design</h4>
          <div className="i1">
            <img className="image9" src={img9}></img>
          </div>
        </div>
      </div>
    </section>
    {components[index]}
    </>
  );
};

export default Home;
