import React from 'react'
import { FaRegMap, FaPhone, FaTwitter, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";



const Header = () => {

    const icons = [
      { icon: <FaTwitter className="mt-4" /> },
      { icon: <FaFacebook className="mt-4" /> },
      { icon: <FaGoogle className="mt-4" /> },
      { icon: <FaInstagram className="mt-4" /> },
    ];

  return (
    <div className="items-center justify-center">
      <div className="flex space-x-20 bg-[#052f48] max-w-screen text-white/50">
        <h2 className="flex items-center">
          <FaPhone className="text-blue-700 rotate-90 ml-20" />
          Call Us:+250 790194517
        </h2>
        <h2 className="flex ml-10">
          <FaRegMap className="text-blue-700 text-xl m-1" /> Location: San
          Francisco, California,
          <br /> USA
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
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Services</h2>
            <h2>work</h2>
            <h2>Princing</h2>
            <h2>Blog</h2>
            <h2>Contact</h2>
          </div>
        </div>
       
     
    </div>
  );
}

export default Header