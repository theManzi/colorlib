import React from 'react'

import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Cards = ({image, name, title  }) => {
  return (
    <div className=" mt-30">
     
        <div className="group group-hover:bg-blue-500 relative bg-white h-130 w-90 pt-20 rounded-lg justify-items-center hover:bg-blue-500 duration-300 transition">
          <div className="absolute -top-30">
            <img
              src={image}
              alt="Card 1"
              className="w-60 h-60 rounded-full border-15 border-white"
            />
          </div>

          <div className="text-center text-white pt-20">
            <h1 className="text-black text-3xl font-semibold  group-hover:text-white">
              {name}
            </h1>
            <h1 className="text-blue-500 text-2xl pt-4 font-semibold  group-hover:text-white">
              {title}
            </h1>
            <div className="flex gap-4 justify-center pt-4 pb-4">
              <FaTwitter className="text-white bg-blue-500 text-4xl p-3 rounded-full w-12 h-12  group-hover:text-white group-hover:bg-white/30" />
              <FaFacebook className="text-white bg-blue-500 text-4xl p-3 rounded-full w-12 h-12  group-hover:text-white group-hover:bg-white/30" />
              <FaGoogle className="text-white bg-blue-500 text-4xl p-3 rounded-full w-12 h-12  group-hover:text-white group-hover:bg-white/30" />
              <FaInstagram className="text-white bg-blue-500 text-4xl p-3 rounded-full w-12 h-12  group-hover:text-white group-hover:bg-white/30" />
            </div>
            <p className="text-2xl text-black/50 font-semibold text-center m-3  group-hover:text-white/50">
              I am an ambitious
              <br /> workaholic, but apart
              <br /> from that, pretty simple
              <br />
              person.
            </p>
          </div>
        </div>
     
    </div>
  );
}

export default Cards