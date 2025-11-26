import React, { useEffect, useRef, useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import BackGround from "./components/background";
import Tittle from "./components/tittle";
import { Pagination } from "swiper/modules";
import PaginationCodes from "./components/paginationCodes";


const Work = () => {

  const image = [
    { img: "gallery-1.jpg" },
    { img: "gallery-2.jpg" },
    { img: "gallery-3.jpg" },
    { img: "gallery-4.jpg" },
    { img: "gallery-5.jpg"},
    { img: "gallery-6.jpg"},
    { img: "gallery-7.jpg"},
    { img: "gallery-8.jpg"},
  ];

  return (
    <div className="">
      <BackGround to="/" name="HOME" page="WORK" pageName="Work" />

      {/* case study */}
      <div className="p-30 pl-50 text-center bg-white">
        <Tittle
          head1="Case Study"
          head2="We Take Every Case "
          head3="Studies Very Seriously"
        />
      </div>

      {/* case study cards */}
      <div className="flex flex-wrap justify-center items-center bg-white gap-7">
        {image.map((images, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={images.img}
              alt="case study"
              className="object-cover transition duration-500 group-hover:brightness-50 h-102 w-82"
            />

            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h1 className="text-white text-3xl font-semibold mt-70 m-5">
                Business Finance consulting
              </h1>

              <h1 className="text-white text-4xl font-bold mb-92">
                <GrFormSearch className="bg-green-400 text-sm h-12 w-11 rounded-sm" />
              </h1>
            </div>
          </div>
        ))}
      </div>

     <PaginationCodes />
    </div>
  );
};

export default Work;
