import React from 'react'
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import ut1 from "../../assets/yt/aws_full_edureka.jpg";
import ut2 from "../../assets/yt/aws_full_simpli.jpg";
import ut3 from "../../assets/yt/Greatlearning_cloud.jpg";
import ut4 from "../../assets/yt/Kudvenkat_cloud.jpg";
import ut5 from "../../assets/yt/simplilearn_cloud.jpg";
import ut6 from "../../assets/yt/tutorialsPoint_cloud.jpg";
import ut7 from "../../assets/yt/Univ_academy_cloud.jpg";
import ct1 from "../../assets/courses/cloud_udemy.png";
import ct2 from "../../assets/courses/cloud_udemy2.png";
import ct3 from "../../assets/courses/coursera_cloud_2.png";
import ct4 from "../../assets/courses/microsoftAzure_coursera.png";
import ct5 from "../../assets/courses/pluralsight_cloud.png";


const Cloud = () => {
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
                  <a href="https://cloud.google.com/">
                    Google Cloud
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://aws.amazon.com/">
                    Amazon Web Services
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://azure.microsoft.com/en-in/ ">
                    Microsoft Azure
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
                  <a href="https://www.youtube.com/watch?v=k1RI5locZE4">
                    <img className="im1" src={ut1} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=ZB5ONbD_SMY">
                    <img className="im1" src={ut2} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=-8O32k26RWA">
                    <img className="im1" src={ut3} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=A7h5wSlw3fg">
                    <img className="im1" src={ut4} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=bRiatZMnkmA">
                    <img className="im1" src={ut5} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=JBo2vV5SpOM">
                    <img className="im1" src={ut6} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=0rrDqBIP2qU">
                    <img className="im1" src={ut7} />
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
                  <img className="im1" src={ct1} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                  <img className="im1" src={ct2} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                  <img className="im1" src={ct3} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                  <img className="im1" src={ct4} />
                </a>
              </div>

              
              <div className="cr1">
                <a href="https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65j69i60l2.3791j0j1&sourceid=chrome&ie=UTF-8">
                  <img className="im1" src={ct5} />
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
              <a href='#Suggestion'> Suggestion</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Cloud
