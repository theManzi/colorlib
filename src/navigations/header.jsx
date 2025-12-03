import { path } from 'framer-motion/client';
import React from 'react'
import { FaRegMap, FaPhone, FaTwitter, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Header = () => {

    const icons = [
      { icon: <FaTwitter className="mt-4" /> },
      { icon: <FaFacebook className="mt-4" /> },
      { icon: <FaGoogle className="mt-4" /> },
      { icon: <FaInstagram className="mt-4" /> },
  ];
  
  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Work", path: "/Work" },
    { name: "Pricing", path: "/Pricing" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact", path: "/Contact" },
  ]

  return (
    <div className="justify-items-center w-screen  bg-white justify-center items-center">
      <div className="lg:flex lg:space-x-20 md:flex md:space-x-10 bg-[#052f48] w-screen text-white/50 items-center justify-center ">
        <h2 className="lg:flex md:flex items-center">
          <FaPhone className="text-blue-700 rotate-90 lg:ml-20 md:ml-10" />
          Call Us:+250 790194517
        </h2>
        <h2 className="lg:flex lg:ml-15 md:flex md:ml-7 items-center">
          <FaRegMap className="text-blue-700 lg:text-xl lg:m-1 md:text-xl md:m-1" /> Location: San
          Francisco, California,
           USA
        </h2>
        <div className="lg:flex md:flex lg:gap-1 md:gap-1 lg:ml-95 md:ml-50">
          {icons.map((icons, index) => (
            <div
              key={index}
              className="text-white lg:h-12 lg:w-12 bg-blue-500 lg:mt-1 justify-items-center"
            >
              {icons.icon}
            </div>
          ))}
        </div>
      </div>
   
        <div className="p-5 ml-10 flex gap-80">
          <div>
            <h1 className="text-3xl font-extrabold">
              UNION<span className="text-blue-500">CORP.</span>
            </h1>
            <p className="text-black/40 font-medium">Finance & Consultation</p>
          </div>
          <div className="flex gap-15 text-lg items-center">
           
            {nav.map((nav, index) => (
              <Link key={index} to={nav.path} className="text-black/60 hover:text-blue-500">
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
       
     
    </div>
  );
}

export default Header