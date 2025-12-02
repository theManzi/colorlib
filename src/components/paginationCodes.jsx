import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ScrollFade from './scrollFade';

const PaginationCodes= () => {
  return (
    <div>
      {/* pagination */}
      <ScrollFade>
        <div class="flex items-center gap-1 bg-white justify-center">
          <div className="m-30 flex gap-1">
            <button className="border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 ">
              <IoIosArrowBack className="w-12" />
            </button>

            <div class="flex gap-1 text-black text-2xl md:text-base">
              <button className="border-black/10 border rounded-lg bg-blue-500 transition duration-300 w-12 h-12">
                1
              </button>
              <button className="border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 w-12 h-12 ">
                2
              </button>
              <button className="border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 w-12 h-12 ">
                3
              </button>
              <button className="border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 w-12 h-12 ">
                4
              </button>
              <button className="border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 w-12 h-12 ">
                5
              </button>
              <button className="border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 w-12 h-12 ">
                6
              </button>
            </div>

            <button className="mr-4 border-black/10 border rounded-lg hover:bg-blue-500 transition duration-300 ">
              <IoIosArrowForward className=" w-12" />
            </button>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
}

export default PaginationCodes