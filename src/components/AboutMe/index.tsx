// About Me Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import { ITechnologyCarousel } from "../../common/types"
import { technologyCarousel } from "../../common/technologyCarousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import "./style.css";

// Main
// =============================================================
function AboutMe() {
    // Map Functions
    // =============================================================
    // Technology Carousel
    function mapCarousel(item: ITechnologyCarousel) {
        return (
          <SwiperSlide key={item.id}>
            <div>
                <img src={item.icon} alt={`${item.name} logo`}/>
                <p className="content">{item.name}</p>
            </div>
          </SwiperSlide>
        )
    };

    // Render
    // =============================================================
    return (
        <div className="centered" id="aboutMe">
          <h3 className="sectionTitle mb-6">Bio</h3>
          <div className="is-justify-content-center">
            <div className="container mb-2 p-3">
              <header className="about">About Me</header>
              <hr className="smallHR"/>
              <p className="content">
                I am a graduate of the University of New Hampshire's Full Stack Coding Bootcamp, where I gained proficiency in a range of cutting-edge technologies, including Typescript, React, Express.js, and MongoDB. Additionally, I hold a degree from Becker College, where I studied Interactive Media Design with a focus on Digital Illustration.
                <br/>
                Throughout my professional experience, I have created numerous aesthetically pleasing and functional web applications that are responsive, user-friendly, and easily scalable. I have also worked extensively with multiple e-commerce and registration sites within industries such as pet health, human genetics, and industrial manufacturing.
              </p>
            </div>
            <div className="container p-3">
                <header className="about">Technologies I've Worked With</header>
                <hr className="smallHR"/>
                <Swiper
                  modules={[Navigation,EffectCoverflow,Autoplay]}
                  slidesPerView={3}
                  spaceBetween={15}
                  navigation={true}
                  loop={true}
                  effect={"coverflow"}
                  autoplay={
                    {delay: 10000}
                  }
                >                  
                  {technologyCarousel.map(mapCarousel)}
                </Swiper>
            </div>
          </div>
        </div>
    )
}

export default AboutMe;