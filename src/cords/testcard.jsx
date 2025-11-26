import React from 'react'
import { ImBubbles2 } from 'react-icons/im';

const TestCard = ({image}) => {
  return (
    <div className="justify-items-center">
      <div
        className="relative bg-white h-95 w-110 rounded-lg card-active
      [.swiper-slide-active_&]:bg-blue-500"
      >
        <div className="absolute -top-7 left-10">
          <ImBubbles2
            className="text-white text-2xl bg-blue-500 h-14 w-14 p-4 rounded-full
          [.swiper-slide-active_&]:text-blue-500
          [.swiper-slide-active_&]:bg-white"
          />
        </div>
        <p className="text-2xl text-black/50 m-10 pt-8 [.swiper-slide-active_&]:text-white/80">
          Far far away, behind the word
          mountains, far from the countries
          
          Vokalia and Consonantia, there live
          the blind texts.
        </p>
        <div className="flex gap-5 pt-5 justify-center">
          <img src={image} alt="person" className="w-28 h-28 rounded-full " />
          <h1 className="text-3xl text-blue-500 font-semibold pt-5 [.swiper-slide-active_&]:text-white">
            Roger Scott <br />
            <span className="text-xl text-black/70 font-semibold [.swiper-slide-active_&]:text-white/90">
              Marketing Manage
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TestCard