import React from "react";
import Tittle from "./tittle";
import { image, p, title } from "framer-motion/client";
import { GrMoney } from "react-icons/gr";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { IoTriangleSharp } from "react-icons/io5";

const Services = () => {
  const services = [
    {
      title: "Financial Planning",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Investment Management",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Retirement Solutions",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Tax Advisory",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Estate Planning",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Risk Management",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Technology Management",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Consulting Services",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
  ];
  return (
    <div className="justify-center items-center">
      <div className="p-30 pl-50 text-center">
        <Tittle
          head1="Services"
          head2="Our Exclusive Services We Offer For You"
        />
      </div>

      <div className="grid grid-cols-4 justify-center items-center space-x-10 pb-50">
        {services.map((service, index) => (
          <div key={index} className="text-center ">
            <div className="relative w-40 h-35 bg-[#ffffff] ml-30 mt-30 justify-items-center-safe">
              <GrMoney className=" text-blue-500 pt-2" size={100} />
              <div className="absolute -bottom-8 text-white text-4xl">
                <IoTriangleSharp size={70} className="rotate-180" />
 
              </div>
            </div>
            <h1 className="text-3xl  font-semibold pt-10 text-black">
              {service.title}
            </h1>
            <p className="text-2xl pt-5 text-black/40">{service.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
