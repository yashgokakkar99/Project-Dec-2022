import React from "react";
import "./About.css";
import IMG1 from "../../assets/yash_profile.jpg";
import IMG2 from "../../assets/Ashutosh_profile.jpg";
import {FaRegHandshake} from "react-icons/fa";
import {FiDownload} from "react-icons/fi";
import Lottie from "lottie-react";
import hand1 from "../../assets/lotties/handshake.json";


const About = () => {
  return (
    <section id="About">
      
      <div className="about__text">
        <h2>About Us</h2>
        <p>
          map2proCoder is developed to provide essential links to study material available online. So that any student start working towards
          his/her career in Computer Science in various domains such as web dev, android dev, cloud computing, cyber security and many more.
        </p>
      </div>
      <div className="portfolio__container">
          <div className="portfolio_img">
            <img src={IMG1} alt="" />
            <h3>YASH GOKKAKAR</h3>
            <a href="https://linktr.ee/yash_gokakkar" target="_blank" className="btn">
            <FiDownload size={30} />
            </a>
            <a href="https://linktr.ee/yash_gokakkar" target="_blank" className="btn">
            <FaRegHandshake size={30}/>
            </a>
            
          </div>
          <div className="portfolio_img">
            <img src={IMG2} alt="" />
            <h3> ASHUTOSH RAJ GUPTA </h3>
            <a href="https://linktr.ee/ashu_2643" target="_blank" className="btn">
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
