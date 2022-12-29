import React from "react";
import "./About.css";
import IMG1 from "../../assets/yash_profile.jpg";
import IMG2 from "../../assets/Ashutosh_profile.jpg";
import { FaRegHandshake } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import cv1 from "../../assets/cv_Yash.pdf";
import cv2 from "../../assets/cv_Ashutosh.pdf";
import Lottie from "lottie-react";
import hand1 from "../../assets/lotties/handshake.json";

const About = () => {
  return (
    <section id="About">
      <div className="about__text">
        <h2>About Us</h2>
        <div className="con">
          In order to help students make bright careers in the various fields such as Web dev, Android Dev,
           Cloud computing, AI, ML, Cyber security and many more. <b><i><font color="magenta">"map2proCoder"</font></i></b> provides key links(resources) to study
           materials available online.
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio_img">
          <img src={IMG1} alt="" />
          <h3>YASH GOKKAKAR</h3>
          <a href={cv1} target="_blank" download className="btn">
            <FiDownload size={30} />
          </a>
          <a
            href="https://linktr.ee/yash_gokakkar"
            target="_blank"
            className="btn"
          >
            <FaRegHandshake size={30} />
          </a>
        </div>
        <div className="portfolio_img">
          <img src={IMG2} alt="" />
          <h3> ASHUTOSH RAJ GUPTA </h3>
          <a href={cv2} target="_blank" download className="btn">
            <FiDownload size={30} />
          </a>
          <a href="https://linktr.ee/ashu_2643" target="_blank" className="btn">
            <FaRegHandshake size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
