import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

const Button2 = ({name}) => {
  return (
    <div>
      <button class="px-12 py-6 bg-blue-500 text-white font-bold rounded-sm mt-10 flex cursor-pointer texrt-xl">
        {name}
      </button>
    </div>
  );
}

export default Button2