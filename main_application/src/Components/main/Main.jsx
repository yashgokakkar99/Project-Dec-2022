import React from "react";
import "./Main.css";
import sampleimg from '../../assets/suggestion.png';

// import Swiper core and required modules
//import { Pagination ,Navigation} from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Main = () => {
  return (
    <section id="Main">
      <div className="maindiv_content">
        <div className="offi_websites">
          <h4>Official websites</h4>
          <div className="marquee_div">
            <marquee
              id="rightContainer_ContentTable2_panel3"
              align="justify"
              direction="up"
              onmouseout="this.start()"
              height="200px"
              onmouseover="this.stop()"
              scrollamount="1"
              scrolldelay="60"
            >
              <div className="site1">
                <p align="justify">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    Google
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    Google
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    Google
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    Google
                  </a>
                </p>
              </div>
            </marquee>

          </div>
        </div>
        <div className="yt_videos">
        <h4>Youtube videos</h4>
          <div className="img_marquee">
            <marquee
              id="rightContainer_ContentTable2_panel3"
              align="justify"
              direction=""
              onmouseout="this.start()"
              height="200px"
              onmouseover="this.stop()"
              scrollamount="1"
              scrolldelay="60"
            >
              <div className="yt1">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8"><img className="im1" src={sampleimg}/></a>
              </div>
            </marquee>
          </div>
        </div>
        <div className="Projects">
          <h4>Projects</h4>
        </div>
        <div className="Roadmap">
          <h4>Roadmap</h4>
        </div>
        <div className="Courses">
          <h4>Courses</h4>
        </div>
        <div className="Suggestion_form">
          <h4>Suggestions form</h4>
        </div>
      </div>
    </section>
  );
};

export default Main;
