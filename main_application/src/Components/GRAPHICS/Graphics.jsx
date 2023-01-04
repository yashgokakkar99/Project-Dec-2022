import React from 'react'
import './Graphics.css'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import ytb1 from '../../assets/courses/gd/gd_yt1.png'
import ytb2 from '../../assets/courses/gd/gd_yt2.png'
import ytb3 from '../../assets/courses/gd/gd_yt3.png'
import ytb4 from '../../assets/courses/gd/gd_yt4.png'
import crs1 from '../../assets/courses/gd/gd_cr1.png'
import crs2 from '../../assets/courses/gd/gd_cr2.png'
import crs3 from '../../assets/courses/gd/gd_cr3.png'
import crs4 from '../../assets/courses/gd/gd_cr4.png'
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";

const Graphics = () => {
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
                    <a href="https://desygner.com/" target='_blank'>
                      Desygner
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.figma.com/graphic-design-tool/" target='_blank'>
                      Figma
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.adobe.com/products/photoshop.html" target='_blank'>
                      Adobe Photoshop
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.canva.com/" target='_blank'>
                      Canva
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
                    <a href="https://desygner.com/" target='_blank'>
                      Desygner
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.figma.com/graphic-design-tool/" target='_blank'>
                      Figma
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.adobe.com/products/photoshop.html" target='_blank'>
                      Adobe Photoshop
                    </a>
                  </p>
                </div>
                <div className="site1">
                  <p align="justify">
                    <a href="https://www.canva.com/" target='_blank'>
                      Canva
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
                    <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn" target='_blank'>
                      <img className="im1" src={ytb1} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/playlist?list=PL0EqspLrOAxRX_IeXFX1jcaqHKCc45IJx" target='_blank'>
                      <img className="im1" src={ytb2} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/watch?v=YiLUYf4HDh4" target='_blank'>
                      <img className="im1" src={ytb3} />
                    </a>
                  </p>
                </div>

                <div className="yt1">
                  <p align="justify">
                    <a href="https://www.youtube.com/watch?v=un50Bs4BvZ8" target='_blank'>
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
                  href="https://www.youtube.com/playlist?list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn"
                  target="blank"
                >
                  <img className="im1" src={ytb1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/playlist?list=PL0EqspLrOAxRX_IeXFX1jcaqHKCc45IJx"
                    target="blank"
                  >
                    <img className="im1" src={ytb2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=YiLUYf4HDh4"
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
                    href="https://www.youtube.com/watch?v=un50Bs4BvZ8"
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
                <a href="https://www.youtube.com/watch?v=vkSOIkNWCww" target='_blank'>Get the road map</a>
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
                  <a href="https://www.udemy.com/course/graphic-design/" target='_blank'>
                    <img className="im1" src={crs1} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://in.coursera.org/specializations/graphic-design" target='_blank'>
                    <img className="im1" src={crs2} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://in.upskillist.com/courses/design/online-graphic-design-course/" target='_blank'>
                    <img className="im1" src={crs3} />
                  </a>
                </div>

                <div className="cr1">
                  <a href="https://www.udemy.com/course/graphic-design-for-beginners/" target='_blank'>
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
                  href="https://www.udemy.com/course/graphic-design/"
                  target="blank"
                >
                  <img className="im1" src={crs1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://in.coursera.org/specializations/graphic-design" target="blank">
                  <img className="im1" src={crs2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="ttps://in.upskillist.com/courses/design/online-graphic-design-course/"
                  target="blank"
                >
                  <img className="im1" src={crs3} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.udemy.com/course/graphic-design-for-beginners/" target="blank">
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

export default Graphics
