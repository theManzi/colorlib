import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import ScrollFade from '../components/scrollFade';

const Button = ({name, icons}) => {
  return (
    <div>
      <ScrollFade>
        <button class="px-8 py-4 bg-white text-blue-500 font-bold rounded-sm mt-4 flex cursor-pointer">
          {name}
          {icons}
        </button>
      </ScrollFade>
    </div>
  );
}

export default Button