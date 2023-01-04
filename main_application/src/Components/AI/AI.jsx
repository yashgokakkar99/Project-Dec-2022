import React from 'react'
import './AI.css'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import road_im from "../../assets/Images/road-map.png";
import ytb1 from '../../assets/courses/AI/ai_yt1.png';
import ytb2 from '../../assets/courses/AI/ai_yt2.png'
import ytb3 from '../../assets/courses/AI/ai_yt3.png'
import ytb4 from '../../assets/courses/AI/ai_yt4.png'
import crs1 from '../../assets/courses/AI/ai_cr1.png'
import crs2 from '../../assets/courses/AI/ai_cr2.png'
import crs3 from '../../assets/courses/AI/ai_cr3.png'
import crs4 from '../../assets/courses/AI/ai_cr4.png'
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";



const AI = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <section id="Main">
        <div className="maindiv_content" id='yash_div'>
          <div className="offi_websites">
            <h4>Official websites</h4>
            <div className="marquee_div" id="link_con">
            <div className="all_links">
              <marquee
                id="rightContainer_ContentTable2_panel3"
                align="justify"
                direction="up"
                onmouseout="this.start()"
                height="165px"
                onmouseover="this.stop()"
                scrollamount="3"
                scrolldelay="60"
              >
                <div className="site1">
                  <p align="justify">
                    <a href="https://ai.google/" target='_blank'>
                       Google AI
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.nist.gov/artificial-intelligence" target='_blank'>
                      NIST
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://indiaai.gov.in/" target='_blank'>
                      Indiaai
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://research.ibm.com/artificial-intelligence" target='_blank'>
                      Artificial intelligence -IBM
                    </a>
                  </p>
                </div>
              </marquee>
              </div>

              <div className="modal_button">
              <button onClick={() => setModalIsOpen(true)}>Click Here</button>
              <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                  overlay: {
                    backgroundColor: "#3c3c74",
                    zIndex: 100,
                  },
                  content: {
                    zIndex: 100,
                    backgroundColor: "#313150",
                  },
                }}
              >
              <div className="site1">
                  <p align="justify">
                    <a href="https://ai.google/" target='_blank'>
                       Google AI
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.nist.gov/artificial-intelligence" target='_blank'>
                      NIST
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://indiaai.gov.in/" target='_blank'>
                      Indiaai
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://research.ibm.com/artificial-intelligence" target='_blank'>
                      Artificial intelligence -IBM
                    </a>
                  </p>
                </div>
                
                <div>
                  <button
                    id="close_btn"
                    onClick={() => setModalIsOpen(false)}
                    style={{
                      backgroundColor: "red",
                      height: "30px",
                      width: "60px",
                      color: "white",
                    }}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
            </div>
          </div>
          <div className="yt_videos">
            <h4>Youtube videos</h4>
            <div className="img_marquee">
              {/* <marquee
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
                    <a href="https://www.youtube.com/watch?v=JMUxmLyrhSk" target='_blank'>
                      <img className="im1" src={ytb1} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/watch?v=lTzHlU3OrXs" target='_blank'>
                      <img className="im1" src={ytb2} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/playlist?list=PLH2l6uzC4UEVGUu2--3xBjTMFily1IwP9" target='_blank'>
                      <img className="im1" src={ytb3} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/playlist?list=PLkjZS1KzvTGGaTmv08sPS-6Ru4d_PXgXI" target='_blank'>
                      <img className="im1" src={ytb4} />
                    </a>
                  </p>
                </div>
              </marquee> */}
              <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <a
                  href="https://www.youtube.com/watch?v=JMUxmLyrhSk"
                  target="blank"
                >
                  <img className="im1" src={ytb1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=lTzHlU3OrXs"
                    target="blank"
                  >
                    <img className="im1" src={ytb2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/playlist?list=PLH2l6uzC4UEVGUu2--3xBjTMFily1IwP9"
                    target="blank"
                  >
                    <img className="im1" src={ytb3} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p align="justify">
                  <a
                    href="https://www.youtube.com/playlist?list=PLkjZS1KzvTGGaTmv08sPS-6Ru4d_PXgXI"
                    target="blank"
                  >
                    <img className="im1" src={ytb4} />
                  </a>
                </p>
              </SwiperSlide>
              
            </Swiper>
            </div>
          </div>
          <div className="Projects">
            <h4>Projects</h4>
            <div className="project_con">
            <Lottie animationData={cs1}/>
            {/* <div className="level3">
              <h4>Advanced</h4>
            </div>
            <div className="level2">
              <h4>Intermediate</h4>
            </div>
            <div className="level1">
              <h4>Basic</h4>
            </div> */}
            </div>
          </div>
          <div className="Roadmap">
            <h4>Roadmap</h4>
            <div className="roadmap_con">
              <div className="road_img">
                <img src={road_im}></img>
              </div>
              <div className="button">
                <a href="https://www.youtube.com/watch?v=I6BRHxNilMw" target='_blank'>Get the road map</a>
              </div>
            </div>
          </div>

          <div className="Courses">
            <h4>Courses</h4>
            <div className="course_marquee">
              {/* <marquee
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
                  <a href="https://in.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai" target='_blank'>
                    <img className="im1" src={crs1} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://in.coursera.org/learn/ai-for-everyone" target='_blank'>
                    <img className="im1" src={crs2} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://intellipaat.com/artificial-intelligence-deep-learning-course-with-tensorflow/" target='_blank'>
                    <img className="im1" src={crs3} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.udemy.com/course/artificial-intelligence-az/" target='_blank'>
                    <img className="im1" src={crs4} />
                  </a>
                </div>
              </marquee> */}
              <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <a
                  href="https://in.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai"
                  target="blank"
                >
                  <img className="im1" src={crs1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://in.coursera.org/learn/ai-for-everyone" target="blank">
                  <img className="im1" src={crs2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="https://intellipaat.com/artificial-intelligence-deep-learning-course-with-tensorflow//"
                  target="blank"
                >
                  <img className="im1" src={crs3} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.udemy.com/course/artificial-intelligence-az/" target="blank">
                  <img className="im1" src={crs4} />
                </a>
              </SwiperSlide>
            </Swiper>
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
  )
}

export default AI
//heygit add