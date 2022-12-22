import React from "react";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";

const Andro = () => {
  return (
    <div>
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
                scrollamount="3"
                scrolldelay="60"
              >
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                      Android
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
                direction="up"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="4"
                scrolldelay="5"
              >
                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                      <img className="im1" src={sampleimg} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                      <img className="im1" src={sampleimg1} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                      <img className="im1" src={sampleimg} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                      <img className="im1" src={sampleimg} />
                    </a>
                  </p>
                </div>
              </marquee>
            </div>
          </div>
          <div className="Projects">
            <h4>Projects</h4>
            <div className="project_con">
              <div className="level5">
                <h4>Project 5</h4>
              </div>
              <div className="level4">
                <h4>Project 4</h4>
              </div>
              <div className="level3">
                <h4>Project 3</h4>
              </div>
              <div className="level2">
                <h4>Project 2</h4>
              </div>
              <div className="level1">
                <h4>Project 1</h4>
              </div>
            </div>
          </div>
          <div className="Roadmap">
            <h4>Roadmap</h4>
            <div className="roadmap_con">
              <div className="road_img">
                <img src={road_im}></img>
              </div>
              <div className="button">
                <a href="">Get the road map</a>
              </div>
            </div>
          </div>

          <div className="Courses">
            <h4>Courses</h4>
            <div className="course_marquee">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="down"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="4"
                scrolldelay="10"
              >
                <div className="cr1">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    <img className="im1" src={sampleimg} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    <img className="im1" src={sampleimg1} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    <img className="im1" src={sampleimg} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                    <img className="im1" src={sampleimg} />
                  </a>
                </div>
              </marquee>
            </div>
          </div>

          <div className="Suggestion_form">
            <h4>Suggestions form</h4>

            <div className="suggest_con">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="200px"
                onmouseover="this.stop()"
                scrollamount="3"
                scrolldelay="60"
              ></marquee>
              <div className="texts">
                {/* <p>Suggestion</p> */}
                <a href="#Suggestion"> Suggestion</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Andro;
