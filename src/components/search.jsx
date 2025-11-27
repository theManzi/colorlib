import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="flex items-center border-10 gap-2 bg-white border-blue-500/10 h-[70px] w-[400px] rounded-sm overflow-hidden max-w-md p-3">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-xl"
      />
      <FaSearch className='text-xl text-blue-500' />
    </div>
  );
}

export default Search