import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import dsa1 from "../../assets/yt/dsa1.jpg";
import dsa2 from "../../assets/yt/dsa2.jpg";
import dsa3 from "../../assets/yt/dsa3.jpg";
import dsa4 from "../../assets/yt/dsa4.jpg";
import dsa5 from "../../assets/yt/dsa5.jpg";
import cdsa1 from "../../assets/courses/cdsa1.png"
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";

const DSA = () => {
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
                  <a href="https://www.geeksforgeeks.org/data-structures/">
                    DSA | geeks for geeks
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.w3schools.in/data-structures/intro">
                    DSA | w3schools
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.javatpoint.com/data-structure-tutorial">
                    DSA | Java T Point
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.programiz.com/dsa/data-structure-types">
                    DSA | Programiz
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
                  <a href="https://www.geeksforgeeks.org/data-structures/">
                    DSA | geeks for geeks
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.w3schools.in/data-structures/intro">
                    DSA | w3schools
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.javatpoint.com/data-structure-tutorial">
                    DSA | Java T Point
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://www.programiz.com/dsa/data-structure-types">
                    DSA | Programiz
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
                  <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi">
                    <img className="im1" src={dsa1} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU">
                    <img className="im1" src={dsa2} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsToJ9zSl4-5BfOBzAR0fm--f">
                    <img className="im1" src={dsa3} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=EAR7De6Goz4&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz">
                    <img className="im1" src={dsa4} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ">
                    <img className="im1" src={dsa5} />
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
                  href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
                  target="blank"
                >
                  <img className="im1" src={dsa1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU"
                    target="blank"
                  >
                    <img className="im1" src={dsa2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsToJ9zSl4-5BfOBzAR0fm--f"
                    target="blank"
                  >
                    <img className="im1" src={dsa3} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=EAR7De6Goz4&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
                    target="blank"
                  >
                    <img className="im1" src={dsa4} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
                    target="blank"
                  >
                    <img className="im1" src={dsa5} />
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
              <a href="https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/" target="blank">Get the road map</a>
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
                <a href="https://www.udemy.com/course/datastructurescncpp/">
                  <img className="im1" src={cdsa1} />
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
                  href="https://www.udemy.com/course/datastructurescncpp/"
                  target="blank"
                >
                  <img className="im1" src={cdsa1} />
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

export default DSA
