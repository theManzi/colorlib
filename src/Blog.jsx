import React from 'react'
import BackGround from './components/background'
import BlogCard from './cords/blogcard';
import Blogcardflex from './cords/blogcardflex';
import PaginationCardes from './components/paginationCodes'
import Search from './components/search';
import { IoIosArrowRoundForward, IoMdPerson } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { FaComment } from 'react-icons/fa';
import RecentCard from './cords/recentCard';



const BlogPage = () => {

   const images = [
     { image: "/gallery-1.jpg" },
     { image: "/gallery-2.jpg" },
     { image: "/gallery-3.jpg" },
     { image: "/gallery-4.jpg" },
     { image: "/gallery-1.jpg" },
     { image: "/gallery-2.jpg" },
   ];
  
  const services = [
    
    {data:"Financial Planning"},
    {data:"Investments Management"},
    {data:"Business Loan"},
    {data:"Taxes Consulting"},
    {data:"Insurance Consulting"},
    {data:"Retirement Planning"},
    {data:"Risk Management"},
    {data:"Technology Consulting"},
  ];
  

  const recentImage = [
    { imag: "/gallery-1.jpg" },
    { imag: "/gallery-2.jpg" },
    { imag: "/gallery-3.jpg" },
  ];
  return (
    <div>
      <BackGround to="/" name="HOME" page="BLOG" pageName="Blog" />

      <div className="bg-[#f9faff]">
        <div className="flex">
          <div className="justify-center mt-30 pt-20">
            {images.map((img, index) => (
              <div key={index} className="pt-10 pl-20">
                <Blogcardflex image={img.image} />
              </div>
            ))}
          </div>
          <div className="mt-60 ml-15">
            <Search />
            <div className="space-y-8 mt-10">
              <h1 className="text-black text-3xl font-semibold">
                Our Services
              </h1>
              {services.map((dat, index) => (
                <div key={index}>
                  <p className="flex text-2xl text-black/60">
                    <IoIosArrowRoundForward className="text-2xl pt-2 text-blue-500" />
                    {dat.data}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h1 className="text-black text-3xl font-semibold">Recent Blog</h1>

              <div>
                {recentImage.map((recent, index) => (
                  <div key={index}>
                    <RecentCard recentimg={recent.imag} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 ">
              <h1 className="text-black text-3xl font-semibold mb-10">
                Tag Cloud
              </h1>
              <div className='gap-20 space-y-5'>
              <a
                href=""
                className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
              >
                FINANCE
              </a>
              <a
                href=""
                className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >FUND
              </a>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >
                  CONSULT
                </a>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >
                 BUSINESS
                </a><br/>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20 mt-3"
                >
                  FUNDING
                </a>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >
                 MONEY
                </a>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >
                  INVEST
                </a>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >
                 PLAN
                </a><br/>
                <a
                  href=""
                  className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                >
                 TAX
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <PaginationCardes />
    </div>
  );
}

export default BlogPage