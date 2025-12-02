import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Button from "../button/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ScrollFade from "./scrollFade";

const Content = () => {
  


  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      loop={true}
      speed={800}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="h-screen w-full bg-caver bg-center relative"
          style={{
            backgroundImage: "url('/bg_1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#052f48]/50 flex flex-col justify-center items-center text-white text-center">
            <ScrollFade>
              {" "}
              <h1 className="text-7xl  ">
                We're Always Here To <br />
                Give Financial Help!
              </h1>
              <p className="text-xl mt-4 text-white/80">
                Far far away, behind the word mountains, far from the countries
                Vokalia and <br />
                Consonantia, there live the blind texts.
              </p>
              </ScrollFade>
              <Button
                name="GET STARTED"
                icons={<IoIosArrowRoundForward className="mt-1 ml-4" />}
              />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg_2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#052f48]/50 flex flex-col justify-center items-center text-white text-center">
            <ScrollFade>
              {" "}
              <h1 className="text-7xl  ">
                Build Your Financial
                <br /> Plan With Our <br />
                Specialists
              </h1>
              <p className="text-xl mt-4 text-white/80">
                Far far away, behind the word mountains, far from the countries
                Vokalia and <br />
                Consonantia, there live the blind texts.
              </p>
              </ScrollFade>
              <Button
                name="GET STARTED"
                icons={<IoIosArrowRoundForward className="mt-1 ml-4" />}
              />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Content;
