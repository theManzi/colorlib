import React from 'react'
import { FaComment } from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import ScrollFade from '../components/scrollFade'

const RecentCard = ({recentimg}) => {
  return (
    <div>
      <div className="mt-10 flex gap-5">
        <ScrollFade>
          <div>
            <img src={recentimg} alt="not found" className="w-25 h-25" />
          </div>

          <div>
            <a href="" className="text-2xl hover:text-blue-500 duration-300">
              Incorporation is A Big
              <br /> Milestone for Your <br />
              Business
            </a>
            <a href="" className="flex text-blue-500 mt-2">
              <SlCalender className="bg-white text-md mt-1 text-blue-500" />
              <span className="pl-1 font-semibold text-blue-500">
                January,27,2021
              </span>
              <IoMdPerson className="bg-white text-xl text-blue-500 ml-2" />
              <span className="pl-1 font-semibold text-blue-500">Admin</span>
              <FaComment className="bg-white text-md mt-1 text-blue-500 ml-2" />
              <span className="pl-1 font-semibold text-blue-500">19</span>
            </a>
          </div>
          <div />
        </ScrollFade>
      </div>
    </div>
  );
}

export default RecentCard