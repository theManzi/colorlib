import React from 'react'
import { FaComment } from 'react-icons/fa';
import { GiBreakingChain } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import Button2 from '../button/button2';
import ScrollFade from '../components/scrollFade';


const Blogcardflex = ({image}) => {
  return (
    <div className="">
      <ScrollFade>
        <div className="h-90 w-220 rounded-lg bg-[#ffffff] flex">
          <div className="cursor-pointer">
            <img
              src={image}
              alt="image"
              className="rounded-sm h-90 w-110 -p-10"
            />
          </div>
          <div>
            <div className="ml-10 mt-10 text-white flex">
              <IoMdPerson className="bg-white text-xl text-blue-500" />
              <span className="pl-1 font-semibold text-black/50">ADMIN</span>
              <SlCalender className="bg-white text-md mt-1 text-blue-500 ml-5" />
              <span className="pl-1 font-semibold text-black/50">
                20 JAN. 2025
              </span>
              <FaComment className="bg-white text-md mt-1 text-blue-500 ml-5" />

              <a href="" className="ml-2 text-blue-500 font-semibold">
                3 COMMENTS
              </a>
            </div>

            <br />
            <div className="ml-10 mt-5">
              <a
                href=""
                className="text-2xl font-semibold hover:text-blue-500 duration-300"
              >
                Incorporation is A Big Milestone <br />
                for Your Business
              </a>
              <p className="mt-5 text-black/50 text-xl">
                A small river named Duden flows by <br />
                their place and supplies it with the <br />
                necessary regelialia.
              </p>
            </div>
            <button className="text-white text-base font-semibold bg-blue-500 w-30 h-12 rounded-sm mt-5 ml-10 cursor-pointer">
              READ MORE
            </button>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
}

export default Blogcardflex