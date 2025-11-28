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
import { Link, Outlet } from "react-router-dom";







const BlogPage = () => {

   const images = [
     { image: "/image_1.jpg" },
     { image: "/image_2.jpg" },
     { image: "/image_3.jpg" },
     { image: "/image_4.jpg" },
     { image: "/image_5.jpg" },
     { image: "/image_6.jpg" },
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
    { imag: "/image_1.jpg" },
    { imag: "/image_2.jpg" },
    { imag: "/image_3.jpg" },
  ];

   
  const tag = [
    { tagCloud: "FINANCE" },
    { tagCloud: "FUND" },
    { tagCloud: "CONSALT" },
    { tagCloud: "BUSINESS" },
    { tagCloud: "FUNDING" },
    { tagCloud: "MONEY" },
    { tagCloud: "INVEST" },
    { tagCloud: "PLAN" },
    { tagCloud: "TAX" },
  ];
  return (
    <div>
      <BackGround to="/" name="HOME" page="BLOG" pageName="Blog" />
   
     

      <div className="bg-[#f9faff]">
        <div className="flex">
          <div className="justify-center mt-30 pt-20">
            {images.map((img, index) => (
              <div key={index} className="pt-10 pl-20">
                <Link to="/single">
                  <Blogcardflex image={img.image} />
                </Link>
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
              <div className="grid grid-cols-4 gap-5">
                {tag.map((data, index) => (
                  <div key={index}>
                    <a
                      href=""
                      className="text-blue-500 text-base font-semibold rounded-sm p-2 bg-blue-500/20"
                    >
                      {data.tagCloud}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-black text-3xl font-semibold mb-10">
                Paragraph
              </h1>
              <p className="text-xl text-black/50 mr-25 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <PaginationCardes />
    </div>
  );
}

export default BlogPage