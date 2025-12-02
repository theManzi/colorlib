import React from 'react'
import Tittle from './tittle'
import BlogCard from '../cords/blogcard';
import ScrollFade from './scrollFade';

const Blog = () => {

    const images = [
        { image: '/gallery-1.jpg' },
        { image: '/gallery-2.jpg' },
        { image: '/gallery-3.jpg' },
        { image: '/gallery-4.jpg' },
       
    ];
  return (
    <div className="mb-50">
      <div className="text-center mt-100">
        <Tittle head1="Our Blog" head2="Recent From Blog" />
      </div>

      <ScrollFade>
        {" "}
        <div className="grid grid-cols-4 justify-center  mt-20">
          {images.map((img, index) => (
            <div key={index} className="m-5">
              <BlogCard image={img.image} />
            </div>
          ))}
        </div>
      </ScrollFade>
    </div>
  );
}

export default Blog