import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

const Button = ({name, icons}) => {
  return (
    <div>
      <button class="px-8 py-4 bg-white text-blue-500 font-bold rounded-sm mt-4 flex cursor-pointer">
        {name} 
        {icons}
      </button>
    </div>
  );
}

export default Button