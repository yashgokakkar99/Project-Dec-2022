import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import cr1 from '../../assets/courses/backend/crs1.png';
import cr2 from '../../assets/courses/backend/crs2.png';
import cr3 from '../../assets/courses/backend/crs3.png';
import ytb1 from '../../assets/courses/backend/yt1.png';
import ytb2 from '../../assets/courses/backend/yt2.png';
import ytb3 from '../../assets/courses/backend/yt3.png';
import ytb4 from '../../assets/courses/backend/yt4.png';
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";

const Backend = () => {
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
                  <a href="https://node-postgres.com/" target='_blank'>
                    postgress
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.mysql.com/" target='_blank'>
                    MySQL
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://mongoosejs.com/docs/" target='_blank'>
                    MongoDB
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://expressjs.com/" target='_blank'>
                    Express
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.djangoproject.com/" target='_blank'>
                    Django
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://go.dev/doc/tutorial/web-service-gin" target='_blank'>
                    Golang
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
                  <a href="https://node-postgres.com/" target='_blank'>
                    postgress
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.mysql.com/" target='_blank'>
                    MySQL
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://mongoosejs.com/docs/" target='_blank'>
                    MongoDB
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://expressjs.com/" target='_blank'>
                    Express
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.djangoproject.com/" target='_blank'>
                    Django
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://go.dev/doc/tutorial/web-service-gin" target='_blank'>
                    Golang
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
                  <a href="https://www.youtube.com/watch?v=Oe421EPjeBE" target='_blank'>
                    <img className="im1" src={ytb1} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=oSIv-E60NiU"  target='_blank'>
                    <img className="im1" src={ytb2} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=qw--VYLpxG4"  target='_blank'>
                    <img className="im1" src={ytb3} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=PtQiiknWUcI" target='_blank'>
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
                  href="https://www.youtube.com/watch?v=Oe421EPjeBE"
                  target="blank"
                >
                  <img className="im1" src={ytb1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=oSIv-E60NiU"
                    target="blank"
                  >
                    <img className="im1" src={ytb2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=qw--VYLpxG4"
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
                    href="https://www.youtube.com/watch?v=PtQiiknWUcI"
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
          {<div className="project_con">
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
          </div> }
        </div>
        <div className="Roadmap">
          <h4>Roadmap</h4>
          <div className="roadmap_con">
            <div className="road_img">
              <img src={road_im}></img>
            </div>
            <div className="button">
              <a href="https://roadmap.sh/backend" target="_blank">Get the road map</a>
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
                <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"  target='_blank'>
                  <img className="im1" src={cr1} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.udemy.com/course/python-django-the-practical-guide/"  target='_blank'>
                  <img className="im1" src={cr2} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.udemy.com/course/sql-and-postgresql/"  target='_blank'>
                  <img className="im1" src={cr3} />
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
                  href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                  target="blank"
                >
                  <img className="im1" src={cr1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.udemy.com/course/python-django-the-practical-guide/" target="blank">
                  <img className="im1" src={cr2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="https://www.udemy.com/course/sql-and-postgresql/"
                  target="blank"
                >
                  <img className="im1" src={cr3} />
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
              <a href='#Suggestion'> Suggestion</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Backend
