// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { ImQuotesLeft } from "react-icons/im";
import "./Testimonial.css";
import { IconContext } from "react-icons";

import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import man3 from "../images/youngMan1-jpg.jpg";
import girl1 from "../images/girl.jpg";

const Testimonial = () => {

  const swiperRef = React.useRef(null);

  return (
    <div className="testimonial" id="testimonial">
      <div className="container ">
        {/* <Title text="Testimonial" /> */}

        <Swiper ref={swiperRef}>
          <SwiperSlide>
            <div class="testi-item">
              <div class="testi-avatar">
                <img src={man1} alt="" />
              </div>

              <div class="testi-content">
                <h4>Clients Say!</h4>
                <div className="containers">
                  <div className="slideUpdate">
                    <div>
                  <IconContext.Provider
                        value={{ style: { fontSize: "6rem", color: "#66f" } }}
                      >
                  <ImQuotesLeft/>
                  </IconContext.Provider>
                  </div>
                  <div className="arrow">
                    <div
                      id="previousButton"
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                      <IconContext.Provider value={{ className: "myIcon" }}>
                          <MdOutlineArrowBackIos />
                      </IconContext.Provider>
                    </div>

                    <div
                      id="nextButton"
                      onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                      <IconContext.Provider
                        value={{ className: "myIcon" }}
                      >
                          <MdOutlineArrowForwardIos />
                      </IconContext.Provider>
                    </div>
                    </div>

                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  illum praesentium nulla cumque necessitatibus blanditiis
                  accusantium maiores quibusdam tempora nesciunt ex saepe quas
                  aperiam dolorum quis incidunt, vero fuga tempore. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Et illum
                  praesentium nulla cumque necessitatibus blanditiis accusantium
                  maiores quibusdam tempora nesciunt ex saepe quas aperiam
                  dolorum quis incidunt, vero fuga tempore.
                </p>
                <div class="testi-info">
                  <h3>John Doe</h3>
                  <h4>Developer</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="testi-item">
              <div class="testi-avatar">
                <img src={girl1} alt="" />
              </div>
              <div class="testi-content">
                <h4>Clients Say!</h4>
                <div className="containers">
                    <div className="slideUpdate">
                    <div>
                  <IconContext.Provider
                        value={{ style: { fontSize: "6rem", color: "#66f" } }}
                      >
                  <ImQuotesLeft/>
                  </IconContext.Provider>
                  </div>
                  <div className="arrow">
                    <div
                      id="previousButton"
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                      <IconContext.Provider value={{ className: "myIcon" }}>
                          <MdOutlineArrowBackIos />
                      </IconContext.Provider>
                    </div>

                    <div
                      id="nextButton"
                      onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                      <IconContext.Provider
                        value={{ className: "myIcon" }}
                      >
                          <MdOutlineArrowForwardIos />
                      </IconContext.Provider>
                    </div>
                    </div>

                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  illum praesentium nulla cumque necessitatibus blanditiis
                  accusantium maiores quibusdam tempora nesciunt ex saepe quas
                  aperiam dolorum quis incidunt, vero fuga tempore. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Et illum
                  praesentium nulla cumque necessitatibus blanditiis accusantium
                  maiores quibusdam tempora nesciunt ex saepe quas aperiam
                  dolorum quis incidunt, vero fuga tempore.
                </p>
                <div class="testi-info">
                  <h3>sara Doe</h3>
                  <h4>CEO</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="testi-item">
              <div class="testi-avatar">
                <img src={man2} alt="" />
              </div>

              <div class="testi-content">
                <h4>Clients Say!</h4>
                <div className="containers">
                    <div className="slideUpdate">
                    <div>
                  <IconContext.Provider
                        value={{ style: { fontSize: "6rem", color: "#66f" } }}
                      >
                  <ImQuotesLeft/>
                  </IconContext.Provider>
                  </div>
                  <div className="arrow">
                    <div
                      id="previousButton"
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                      <IconContext.Provider value={{ className: "myIcon" }}>
                          <MdOutlineArrowBackIos />
                      </IconContext.Provider>
                    </div>

                    <div
                      id="nextButton"
                      onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                      <IconContext.Provider
                        value={{ className: "myIcon" }}
                      >
                          <MdOutlineArrowForwardIos />
                      </IconContext.Provider>
                    </div>
                    </div>

                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  illum praesentium nulla cumque necessitatibus blanditiis
                  accusantium maiores quibusdam tempora nesciunt ex saepe quas
                  aperiam dolorum quis incidunt, vero fuga tempore. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Et illum
                  praesentium nulla cumque necessitatibus blanditiis accusantium
                  maiores quibusdam tempora nesciunt ex saepe quas aperiam
                  dolorum quis incidunt, vero fuga tempore.
                </p>
                <div class="testi-info">
                  <h3>Will smith</h3>
                  <h4>UI UX</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="testi-item">
              <div class="testi-avatar">
                <img src={man3} alt="" />
              </div>

              <div class="testi-content">
                <h4>Clients Say!</h4>
                <div className="containers">           
                    <div className="slideUpdate">
                    <div>
                  <IconContext.Provider
                        value={{ style: { fontSize: "6rem", color: "#66f" } }}
                      >
                  <ImQuotesLeft/>
                  </IconContext.Provider>
                  </div>
                  <div className="arrow">
                    <div
                      id="previousButton"
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                      <IconContext.Provider value={{ className: "myIcon" }}>
                          <MdOutlineArrowBackIos />
                      </IconContext.Provider>
                    </div>

                    <div
                      id="nextButton"
                      onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                      <IconContext.Provider
                        value={{ className: "myIcon" }}
                      >
                          <MdOutlineArrowForwardIos />
                      </IconContext.Provider>
                    </div>
                    </div>

                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  illum praesentium nulla cumque necessitatibus blanditiis
                  accusantium maiores quibusdam tempora nesciunt ex saepe quas
                  aperiam dolorum quis incidunt, vero fuga tempore. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Et illum
                  praesentium nulla cumque necessitatibus blanditiis accusantium
                  maiores quibusdam tempora nesciunt ex saepe quas aperiam
                  dolorum quis incidunt, vero fuga tempore.
                </p>
                <div class="testi-info">
                  <h3>Jhon Wilaeam</h3>
                  <h4>Developer</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
