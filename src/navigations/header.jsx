import React from 'react'
import { FaRegMap, FaPhone, FaTwitter, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";



const Header = () => {

    const icons = [
      { icon: <FaTwitter className="mt-4" /> },
      { icon: <FaFacebook className="mt-4" /> },
      { icon: <FaGoogle className="mt-4" /> },
      { icon: <FaInstagram className="mt-4" /> },
  ];
  
  const nav = [
    "Home",
    "About",
    "Services",
    "work",
    "Princing",
    "Blog",
    "Contact",
  ]

  return (
    <div className="justify-items-center ">
      <div className="flex space-x-20 bg-[#052f48] w-screen text-white/50 items-center justify-center ">
        <h2 className="flex items-center">
          <FaPhone className="text-blue-700 rotate-90 ml-20" />
          Call Us:+250 790194517
        </h2>
        <h2 className="flex ml-15 items-center">
          <FaRegMap className="text-blue-700 text-xl m-1" /> Location: San
          Francisco, California,
           USA
        </h2>
        <div className="flex gap-1 ml-95">
          {icons.map((icons, index) => (
            <div
              key={index}
              className="text-white h-12 w-12 bg-blue-500 mt-1 justify-items-center"
            >
              {icons.icon}
            </div>
          ))}
        </div>
      </div>
   
        <div className="m-5 ml-20 flex gap-80">
          <div>
            <h1 className="text-3xl font-extrabold">
              UNION<span className="text-blue-500">CORP.</span>
            </h1>
            <p className="text-black/40 font-medium">Finance & Consultation</p>
          </div>
          <div className="flex gap-15 text-lg items-center">
           
            {nav.map((nav, index) => (
              <div key={index} className="hover:text-blue-500 cursor-pointer">
                {nav} 
              </div>
            ))}
          </div>
        </div>
       
     
    </div>
  );
}

export default Header