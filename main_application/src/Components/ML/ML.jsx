import React from 'react'
import './ML.css'
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import road_im from '../../assets/Images/road-map.png'
import ytb1 from '../../assets/courses/ml/ml_yt_1.png'
import ytb2 from '../../assets/courses/ml/ml_yt_2.png'
import ytb3 from '../../assets/courses/ml/ml_yt_3.png'
import ytb4 from '../../assets/courses/ml/ml_yt_4.png'
import crs1 from '../../assets/courses/ml/ml_cr_1.png'
import crs2 from '../../assets/courses/ml/ml_cr_2.png'
import crs3 from '../../assets/courses/ml/ml_cr_3.png'
import crs4 from '../../assets/courses/ml/ml_cr_4.png'
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";


const ML = () => {
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
                    <a href="https://www.openml.org/" target='_blank'>
                      Openml
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://machinehack.com/" target='_blank'>
                      Machine Hack
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://colab.research.google.com/notebooks/welcome.ipynb#scrollTo=xitplqMNk_Hc" target='_blank'>
                      Google Colab
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.tensorflow.org/" target='_blank'>
                      TensorFlow
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
                    <a href="https://www.openml.org/" target='_blank'>
                      Openml
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://machinehack.com/" target='_blank'>
                      Machine Hack
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://colab.research.google.com/notebooks/welcome.ipynb#scrollTo=xitplqMNk_Hc" target='_blank'>
                      Google Colab
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.tensorflow.org/" target='_blank'>
                      TensorFlow
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
                    <a href="https://www.youtube.com/watch?v=GwIo3gDZCVQ" target='_blank'>
                      <img className="im1" src={ytb1} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" target='_blank'>
                      <img className="im1" src={ytb2} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/watch?v=NWONeJKn6kc" target='_blank'>
                      <img className="im1" src={ytb3} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/watch?v=7eh4d6sabA0" target='_blank'>
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
                  href="https://www.youtube.com/watch?v=GwIo3gDZCVQ"
                  target="blank"
                >
                  <img className="im1" src={ytb1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo"
                    target="blank"
                  >
                    <img className="im1" src={ytb2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=NWONeJKn6kc"
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
                    href="https://www.youtube.com/watch?v=7eh4d6sabA0"
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
                <a href="https://www.codelivly.com/machine-learning-roadmap/" target='_blank'>Get the road map</a>
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
                  <a href="https://developers.google.com/machine-learning/crash-course">
                    <img className="im1" src={crs1} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://in.coursera.org/learn/machine-learning">
                    <img className="im1" src={crs2} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://intellipaat.com/machine-learning-certification-training-course/">
                    <img className="im1" src={crs3} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/">
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
                  href="https://developers.google.com/machine-learning/crash-course"
                  target="blank"
                >
                  <img className="im1" src={crs1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://in.coursera.org/learn/machine-learning" target="blank">
                  <img className="im1" src={crs2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="https://intellipaat.com/machine-learning-certification-training-course/"
                  target="blank"
                >
                  <img className="im1" src={crs3} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/" target="blank">
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

export default ML
