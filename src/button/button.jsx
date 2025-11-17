import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

const Button = () => {
  return (
    <div>
      <button class="px-8 py-4 bg-white text-blue-500 font-semibold rounded-sm mt-4 flex cursor-pointer">
        Get Started <IoIosArrowRoundForward className='mt-1 ml-4'/>
      </button>
    </div>
  );
}

export default Button