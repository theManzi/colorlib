import React from 'react'
import Tittle from './tittle'
import TestCard from '../cords/testcard';
import {Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Testmonial = () => {
  return (
    <div>
      <div className="pt-80 pb-10 text-center">
        <Tittle head1="Testimonial" head2="Happy Customers" />
      </div>
      <div className="m-25">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={800}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          Pagination={{ clickable: true }}
          className="focus-visible:bg-white"
        >
          <SwiperSlide>
            <TestCard image="/person_1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <TestCard image="/person_2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <TestCard image="/person_3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <TestCard image="/person_4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <TestCard image="/person_1.jpg" />
          </SwiperSlide>
        </Swiper>
      
      </div>
    </div>
  );
}

export default Testmonial