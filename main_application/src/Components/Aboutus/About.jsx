import React from "react";
import "./About.css";
import IMG1 from "../../assets/yash_profile.jpg";
import IMG2 from "../../assets/Ashutosh_profile.jpg";

const About = () => {
  return (
    <section id="About">
      
      <div className="about__text">
        <h2>About Us</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          repellat harum similique cumque, recusandae aut maxime facilis enim ex
          ea saepe neque quis quasi aliquid rem atque praesentium optio illum?
        </p>


        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          mollitia saepe <br></br>
          consequuntur nam itaque ex sequi omnis accusamus iure! Fugiat
          inventore nisi, <br></br>
         
        </p>
      </div>
      <div className="portfolio__container">
          <div className="portfolio_img">
            <img src={IMG1} alt="" />
            <h3>YASH GOKKAKAR</h3>
            <a href="https://linktr.ee/yash_gokakkar" target="_blank" className="btn">
              Connect
            </a>
            <a href="https://linktr.ee/yash_gokakkar" target="_blank" className="btn">
              Connect
            </a>
          </div>
          <div className="portfolio_img">
            <img src={IMG2} alt="" />
            <h3> ASHUTOSH RAJ GUPTA </h3>
            <a href="https://linktr.ee/ashu_2643" target="_blank" className="btn">
              Connect
            </a>
            <a href="https://linktr.ee/yash_gokakkar" target="_blank" className="btn">
              Connect
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
