
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./banner.css";
// import images
import slide1 from '../../images/slide-1.jpg'
import slide2 from '../../images/slide-2.jpg'
import slide3 from '../../images/slide-3.jpg'
import slide4 from '../../images/slide-4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation,Scrollbar } from "swiper";
const Banner = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation,Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4}/>
      </SwiperSlide>
    
    </Swiper>
  </>
  )
}

export default Banner