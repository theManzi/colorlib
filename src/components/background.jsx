import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BackGround = ({to, link, name, name2, row, page, pageName}) => {
  return (
    <div className="relative">
      <div
        className="w-full h-[700px] fixed -z-50 top-0 justify-center items-center"
        style={{
          background: "url('/bg_3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  bg-[#052f48]/50 "></div>
      </div>

      <div className="text-center mt-70 mb-25">
        <div className="flex justify-center items-center">
          <Link
            to={to}
            className="text-white/80 text-xl font-bold hover:text-blue-500 transition duration-300 cursor-pointer"
          >
            {name}
          </Link>
          <span className="text-white/80 mr-2">
            <IoIosArrowForward className="text-xl text-white/80" />
          </span>
          <Link
            to={link}
            className="text-white/80 text-xl font-bold hover:text-blue-500 transition duration-300 cursor-pointer"
          >
            {name2}
          </Link>
          <span className="text-white/80 mr-2">
           {row}
          </span>

          <span className="text-white/80 text-xl font-bold">{page}</span>
          <span className="text-white/80 mr-2">
            <IoIosArrowForward className="text-xl text-white/80" />
          </span>
        </div>
        <h1 className="text-8xl  text-white">{pageName}</h1>
      </div>
    </div>
  );
}

export default BackGround