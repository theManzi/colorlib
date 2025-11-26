import React, { useEffect, useRef, useState } from "react";
import Tittle from "./tittle";
import { GrFormSearch } from "react-icons/gr";
import Counter from "./counter";
import Couterpage from "./couterpage";


const Casestudy = () => {
  const image = [
    { img: "gallery-1.jpg" },
    { img: "gallery-2.jpg" },
    { img: "gallery-3.jpg" },
    { img: "gallery-4.jpg" },
  ];

 

  return (
    <div>
      <div className="p-30 pl-50 text-center">
        <Tittle
          head1="Case Study"
          head2="We Take Every Case "
          head3="Studies Very Seriously"
        />
      </div>

      <div className="flex justify-center items-center">
        {image.map((images, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={images.img}
              alt="case study"
              className="object-cover transition duration-500 group-hover:brightness-50 h-115 w-screen"
            />

            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h1 className="text-white text-4xl font-bold mt-70 m-10">
                Business Finance consulting
              </h1>

              <h1 className="text-white text-4xl font-bold mb-102">
                <GrFormSearch className="bg-green-500 text-sm h-14 w-13 rounded-sm" />
              </h1>
            </div>
          </div>
        ))}
      </div>

      <Couterpage />
    </div>
  );
};

export default Casestudy;
