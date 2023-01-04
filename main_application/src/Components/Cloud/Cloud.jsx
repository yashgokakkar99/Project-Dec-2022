import React from 'react'
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
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
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import Modal from "react-modal";


const Cloud = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    // <di className='outerContainer'>
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
              onMouseOut="this.start()"
              height="165px"
              onMouseOver="this.stop()"
              scrollamount="3"
              scrolldelay="60"
            >
              <div className="site1">
                <p align="justify">
                  <a href="https://cloud.google.com/" target="_blank">
                    Google Cloud
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://aws.amazon.com/" target="_blank">
                    Amazon Web Services
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://azure.microsoft.com/en-in/ " target="_blank">
                    Microsoft Azure
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
                  <a href="https://cloud.google.com/" target="_blank">
                    Google Cloud
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://aws.amazon.com/" target="_blank">
                    Amazon Web Services
                  </a>
                </p>
              </div>
              <div className="site1">
                <p align="justify">
                  <a href="https://azure.microsoft.com/en-in/ " target="_blank">
                    Microsoft Azure
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
                  <a href="https://www.youtube.com/watch?v=k1RI5locZE4" target="_blank">
                    <img className="im1" src={ut1} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=ZB5ONbD_SMY" target="_blank">
                    <img className="im1" src={ut2} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=-8O32k26RWA" target="_blank">
                    <img className="im1" src={ut3} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=A7h5wSlw3fg" target="_blank">
                    <img className="im1" src={ut4} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=bRiatZMnkmA" target="_blank">
                    <img className="im1" src={ut5} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=JBo2vV5SpOM" target="_blank">
                    <img className="im1" src={ut6} />
                  </a>
                </p>
              </div>

              <div className="yt1">
                <p align="justify">
                  <a href="https://www.youtube.com/watch?v=0rrDqBIP2qU" target="_blank">
                    <img className="im1" src={ut7} />
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
                  href="https://www.youtube.com/watch?v=k1RI5locZE4"
                  target="blank"
                >
                  <img className="im1" src={ut1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=ZB5ONbD_SMY"
                    target="blank"
                  >
                    <img className="im1" src={ut2} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=-8O32k26RWA"
                    target="blank"
                  >
                    <img className="im1" src={ut3} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=A7h5wSlw3fg"
                    target="blank"
                  >
                    <img className="im1" src={ut4} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=bRiatZMnkmA"
                    target="blank"
                  >
                    <img className="im1" src={ut5} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=JBo2vV5SpOM"
                    target="blank"
                  >
                    <img className="im1" src={ut6} />
                  </a>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p align="justify">
                  <a
                    href="https://www.youtube.com/watch?v=0rrDqBIP2qU"
                    target="blank"
                  >
                    <img className="im1" src={ut7} />
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
              <a href="">Get the road map</a>
            </div>
          </div>
        </div>

        <div className="Courses">
          <h4>Courses</h4>
          <div className="course_marquee">
            {/* <marquee
              id="rightContainer_ContentTable2_panel3"
              behaviour="scroll"
              align="justify"
              direction="down"
              onmouseout="this.start()"
              height="200px"
              onmouseover="this.stop()"
              scrollamount="4"
              scrolldelay="10"
            >
              <div className="cr1">
                <a href="https://www.udemy.com/course/getting-started-with-cloud-computing-level-1/" target="_blank">
                  <img className="im1" src={ct1} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.udemy.com/course/introduction-to-cloud-computing-with-amazon-web-services/" target="_blank">
                  <img className="im1" src={ct2} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://www.coursera.org/learn/cloud-computing?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_google-data-analytics_FTCOF_professional-certificates_PMax-arte-NRL_within_14D&utm_content=B2C&campaignid=19009611551&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo" target="_blank">
                  <img className="im1" src={ct3} />
                </a>
              </div>

              <div className="cr1">
                <a href="https://in.coursera.org/specializations/microsoft-azure-fundamentals-az-900?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_google-it-support_FTCOF_professional-certificates_PMax-arte-NRL_greater_than_14D&utm_content=B2C&campaignid=18968559034&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo" target="_blank">
                  <img className="im1" src={ct4} />
                </a>
              </div>

              
              <div className="cr1">
                <a href="https://www.pluralsight.com/courses/cloud-computing-big-picture" target="_blank">
                  <img className="im1" src={ct5} />
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
                  href="https://www.udemy.com/course/getting-started-with-cloud-computing-level-1/"
                  target="blank"
                >
                  <img className="im1" src={ct1} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.udemy.com/course/introduction-to-cloud-computing-with-amazon-web-services/" target="blank">
                  <img className="im1" src={ct2} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a
                  href="https://www.coursera.org/learn/cloud-computing?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_google-data-analytics_FTCOF_professional-certificates_PMax-arte-NRL_within_14D&utm_content=B2C&campaignid=19009611551&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo"
                  target="blank"
                >
                  <img className="im1" src={ct3} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://in.coursera.org/specializations/microsoft-azure-fundamentals-az-900?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_google-it-support_FTCOF_professional-certificates_PMax-arte-NRL_greater_than_14D&utm_content=B2C&campaignid=18968559034&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo" target="blank">
                  <img className="im1" src={ct4} />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <a href="https://www.pluralsight.com/courses/cloud-computing-big-picture" target="blank">
                  <img className="im1" src={ct5} />
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
    // </div>
  )
}

export default Cloud
