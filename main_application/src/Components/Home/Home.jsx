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
import Android from "../Andro/Andro";
import Cloud from "../Cloud/Cloud";
import AI from "../AI/AI";
import ML from "../ML/ML";
import CyberSecurity from "../CyberSecurity/CyberSecurity";
import Graphics from "../Graphics/Graphics";
import { useState } from "react";
import DSA from "../DSA/DSA";
import Lottie from "lottie-react";
import lot1 from "../../assets/lotties/frontend_lottie.json";
import lot2 from "../../assets/lotties/backend_lottie.json";
import lot3 from "../../assets/lotties/dsa_lottie.json";
import lot4 from "../../assets/lotties/android_lottie.json";
import lot5 from "../../assets/lotties/cloud_lottie.json";
import lot6 from "../../assets/lotties/ai_lottie.json";
import lot7 from "../../assets/lotties/ml_lottie.json";
import lot8 from "../../assets/lotties/cyberSecurity_lottie.json";
import lot9 from "../../assets/lotties/gd_lottie.json";

const Home = () => {
  const components = [
    <Main />,
    <Backend />,
    <DSA />,
    <Android />,
    <Cloud />,
    <AI />,
    <ML />,
    <CyberSecurity />,
    <Graphics />,
  ];
  const [index, setIndex] = useState(0);

  return (
    <>
      <section id="Home">
        <div className="maindiv">
          <div className="rect1">
            <h4>Front-end</h4>
            <div className="i1">
              <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(0)}>
                <Lottie animationData={lot1}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect2">
            <h4>Backend</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(1)}>
                <Lottie animationData={lot2}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect3">
            <h4>DSA</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(2)}>
                <Lottie animationData={lot3}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect4">
            <h4>Android Dev</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(3)}>
                <Lottie animationData={lot4}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect5">
            <h4>Cloud computing</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(4)}>
                <Lottie animationData={lot5}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect6">
            <h4>AI</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(5)}>
                <Lottie animationData={lot6}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect7">
            <h4>ML</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(6)}>
                <Lottie animationData={lot7}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect8">
            <h4>Cyber security</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(7)}>
                <Lottie animationData={lot8}/>
                </div>
              </a>
            </div>
          </div>
          <div className="rect9">
            <h4>Graphics design</h4>
            <div className="i1">
            <a href="#Main">
                <div className="lotty_all" onClick={() => setIndex(8)}>
                <Lottie animationData={lot9}/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {components[index]}
    </>
  );
};

export default Home;
