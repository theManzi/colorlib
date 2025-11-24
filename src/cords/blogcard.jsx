import React from 'react'
import { FaComment } from 'react-icons/fa';
import { GiBreakingChain } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';
import { SiLangchain } from 'react-icons/si';
import { SlCalender } from 'react-icons/sl';


const BlogCard = ({image}) => {
  return (
    <div className="justify-items-center">
      <div className="h-180 w-90 rounded-lg bg-white">
        <img
          src={image}
          alt="image"
          className="rounded-lg h-80 w-100 -p-10"
        />
        <div className="ml-10 mt-10 text-white flex">
          <IoMdPerson className="bg-white text-xl text-blue-500" />
          <span className="pl-1 font-semibold text-black/50">ADMIN</span>
          <SlCalender className="bg-white text-xl text-blue-500 ml-5" />
          <span className="pl-1 font-semibold text-black/50">20 JAN. 2025</span>
          <FaComment className="bg-white text-xl text-blue-500 ml-5" />
          <br />
          <span className="pl-1 font-semibold text-blue-500">3</span>
        </div>
        <a href="" className="ml-10 text-blue-500 font-semibold">
          COMMENTS
        </a>
        <br />
        <div className="ml-10 mt-5">
          <a
            href=""
            className="text-3xl font-semibold hover:text-blue-500 duration-300"
          >
            Incorporation is A<br /> Big Milestone for <br />
            Your Business
          </a>
          <p className="mt-5 text-black/50 text-2xl">
            A small river named <br />
            Duden flows by their
            <br /> place.
          </p>
              </div>
              <a href="" >
                  <GiBreakingChain className='text-3xl text-blue-500 bg-blue-500/20 h-12 w-12 rounded-xl p-3 mt-5 ml-78 cursor-pointer' />
                  </a>
      </div>
    </div>
  );
}

export default BlogCard