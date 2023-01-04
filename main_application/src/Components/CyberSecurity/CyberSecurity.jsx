import React from 'react'
import './CyberSecurity.css'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import ytb1 from '../../assets/courses/cs/cs_yt1.png'
import ytb2 from '../../assets/courses/cs/cs_yt2.png'
import ytb3 from '../../assets/courses/cs/cs_yt3.png'
import ytb4 from '../../assets/courses/cs/cs_yt4.png'
import crs1 from '../../assets/courses/cs/cs_cr1.png'
import crs2 from '../../assets/courses/cs/cs_cr2.png'
import crs3 from '../../assets/courses/cs/cs_cr3.png'
import crs4 from '../../assets/courses/cs/cs_cr4.png'
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";

const CyberSecurity = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <section id="Main">
        <div className="maindiv_content" id='yash_div'>
          <div className="offi_websites">
            <h4>Official websites</h4>
            <div className="marquee_div" id='link_con'>
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
                    <a href="https://www.cybrary.it/" target='_blank'>
                      Cybrary
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.cisa.gov/cybersecurity" target='_blank'>
                      CISA
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://cybercademy.org/training-platforms/" target='_blank'>
                      CyberCademy
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content" target='_blank'>
                      NIST
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
                    <a href="https://www.cybrary.it/" target='_blank'>
                      Cybrary
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.cisa.gov/cybersecurity" target='_blank'>
                      CISA
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://cybercademy.org/training-platforms/" target='_blank'>
                      CyberCademy
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content" target='_blank'>
                      NIST
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
                    <a href="https://www.youtube.com/watch?v=yr1Psapupsc" target='_blank'>
                      <img className="im1" src={ytb1} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/watch?v=nzZkKoREEGo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=2" target='_blank'>
                      <img className="im1" src={ytb2} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/playlist?list=PLQVJk9oC5JKq15cieChuOU9zFdf-FlnMi" target='_blank'>
                      <img className="im1" src={ytb3} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/playlist?list=PLbqGQ5B2op8QfvAfHSpw5jn_Nv22JQuM-" target='_blank'>
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
                  href="https://www.youtube.com/watch?v=yr1Psapupsc"
                  target="blank"
                >
                  <img className="im1" src={ytb1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=nzZkKoREEGo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=2"
                    target="blank"
                  >
                    <img className="im1" src={ytb2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/playlist?list=PLQVJk9oC5JKq15cieChuOU9zFdf-FlnMi"
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
                    href="https://www.youtube.com/playlist?list=PLbqGQ5B2op8QfvAfHSpw5jn_Nv22JQuM-"
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
                <a href="https://www.youtube.com/watch?v=nL2vHJ53Wr4" target='_blank'>Get the road map</a>
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
                  <a href="https://in.coursera.org/specializations/intro-cyber-security" target='_blank'>
                    <img className="im1" src={crs1} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/" target='_blank'>
                    <img className="im1" src={crs2} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.futurelearn.com/courses/introduction-to-cyber-security" target='_blank'>
                    <img className="im1" src={crs3} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://intellipaat.com/cyber-security-course-certification/" target='_blank'>
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
                  href="https://in.coursera.org/specializations/intro-cyber-security"
                  target="blank"
                >
                  <img className="im1" src={crs1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/" target="blank">
                  <img className="im1" src={crs2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="https://www.futurelearn.com/courses/introduction-to-cyber-security"
                  target="blank"
                >
                  <img className="im1" src={crs3} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://intellipaat.com/cyber-security-course-certification/" target="blank">
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

export default CyberSecurity
