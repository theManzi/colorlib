import React from 'react'
import Button from '../button/button';
import { FaFacebook, FaHeart, FaInstagram, FaMap, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';
import { data } from 'framer-motion/client';
import { GrSend } from 'react-icons/gr';

const Footer = () => {

    const services = [
      "Financial Planning",
      "Investments Management",
      "Business Loan",
      "Taxes Consulting",
      "Insurance Consulting",
      "Retirement Planning",
      "Risk Management",
      "Technology Consulting",
    ];

    const post = [
      {
        img: "/image_1.jpg",
        date: "Jan.27,2025",
        data: "Incorporation is a big milestone for business",
      },
      {
        img: "/image_2.jpg",
        date: "Feb.10,2025",
        data: "Incorporation is a big milestone for business",
      },
    ];
          
  return (
    <div className="w-screen">
      <div
        className="relative bg-caver bg-center"
        style={{
          background: "url('/bg_3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-blue-500/80 flex">
          <div className="mt-30 ml-50">
            <h1 className="text-white/90 text-xl font-bold">
              Prepare for takeoff
            </h1>

            <h1 className="text-white/90 text-5xl font-semibold mt-5">
              Looking for business opportunity?
            </h1>
          </div>
          <div className="mt-30 ml-50">
            <Button name="GET STARTED" />
          </div>
        </div>
      </div>

      <div
        className="relative bg-caver bg-center"
        style={{
          background: "url('/bg_1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
        }}
      >
        <div className="absolute inset-0  bg-black/75 flex">
          <div className="mt-30 ml-15 flex ">
            <div>
              <h1 className="text-3xl font-extrabold text-white ">
                UNION<span className="text-blue-500">CORP.</span>
              </h1>
              <p className="text-white/50 font-medium">
                Finance & Consultation
              </p>

              <p className="text-white text-xl mt-10 word-spacing-wide leading-relaxed">
                A small river named Duden flows
                <br />
                by their place and supplies it with the necessary regelialia.
              </p>
              <span className="mt-10 flex gap-2 text-white">
                <FaTwitter className="text-3xl bg-blue-500 rounded-lg p-2 h-10 w-10" />
                <FaFacebook className="text-3xl bg-blue-500 rounded-lg p-2 h-10 w-10" />
                <FaInstagram className="text-3xl bg-blue-500 rounded-lg p-2 h-10 w-10" />
              </span>
            </div>

            <div className=" text-white/50">
              <h1 className="text-2xl text-white font-semibold mb-10">
                Services
              </h1>
              <span className=" gap-3 text-xl text-white grid grid-rows-4 grid-flow-col">
                {services.map((service, index) => (
                  <div key={index} className="">
                    <a
                      href=""
                      className="flex hover:text-blue-500 transition duration-300"
                    >
                      <IoIosArrowRoundForward className="text-white text-2xl mr-2" />
                      {service}
                    </a>
                  </div>
                ))}
              </span>
            </div>

            <div className="ml-20 text-white/50">
              <h1 className="text-2xl text-white font-semibold mb-10">
                Recent Posts
              </h1>
              {post.map((item, index) => (
                <div key={index} className="flex mb-6">
                  <img
                    src={item.img}
                    alt="post"
                    className="h-14 w-14 rounded-lg mr-4"
                  />
                  <div>
                    <div className="flex items-center text-white/50 mb-2">
                      <FaRegCalendarDays className="mr-2" />
                      <span className="text-sm">{item.date}</span>
                      <MdPerson className="mr-2" />
                      <span className="text-sm">Admin</span>
                    </div>
                    <p className="text-white mt-2 text-2xl cursor-pointer">
                      {item.data}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" text-white/50">
              <h1 className="text-2xl text-white font-semibold mb-10">
                Have a Questions?
              </h1>
              <p className="text-white text-xl leading-relaxed flex gap-2 mb-4">
                <FaMap className="text-3xl" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
              <a
                href=""
                className="text-white text-xl leading-relaxed mb-4 flex gap-2 "
              >
                <FaPhoneAlt className="text-2xl p-1" />
                +2 392 3929 210
              </a>
              <a
                href=""
                className="text-white text-xl leading-relaxed mb-4 flex gap-5 "
              >
                <GrSend className="text-2xl" />
                info@yourdomain.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block w-full h-40 bg-[#052c43]">
        <p className="text-center text-white/80 text-xl pt-14 flex justify-center gap-2">
          Copyright ©2025 All rights reserved | This template is made with
          <span>
            <FaHeart className="text-2xl" />
          </span>
          by Colorlib
        </p>
      </div>
    </div>
  );
}

export default Footer