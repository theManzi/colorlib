import React from 'react'
import BackGround from './background'
import { Outlet } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


const BlogSingle = () => {
  return (
    <div>
      <BackGround
        to="/"
        link="/Blog"
        name="HOME"
              name2="BLOG"
              row={<IoIosArrowForward className="text-xl text-white/80" />}
        page="BLOG SINGLE"
        pageName="Blog Details"
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default BlogSingle