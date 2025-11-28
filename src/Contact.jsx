import React from 'react'
import BackGround from './components/background'
import { FaExclamation } from 'react-icons/fa';



const Contact = () => {
  const platforms = [{ media: "FACEBOOK" }, { media: "TWITTER" },
    { media:"INSTAGRAM"},{ media:"DRIBBBLE"},
  ];
  return (
    <div>
      <BackGround to="/" name="HOME" page="CONTACT" pageName="Contact Us" />

      <div className="bg-[#f4f6ff] justify-items-center w-screen pb-50 pt-30">
        <div className="bg-[#ffffff] w-290 h-230 ">
          <div className="p-15">
            <h1 className="text-4xl text-black ">Contact us</h1>
            <p className="text-2xl text-black/50 mt-5">
              We're open for any suggestion or just to have a chat
            </p>
            <div className="mt-10 flex gap-10">
              <div>
                <h1 className="text-xl font-bold  text-black">ADDRESS:</h1>
                <p className="text-xl text-black/50 mt-2">
                  198 West 21th Street, Suite 721
                  <br /> New York NY 10016
                </p>
              </div>
              <div className="ml-10">
                <h1 className="text-xl font-bold  text-black">EMAIL:</h1>
                <p className="text-xl text-blue-500 mt-2">info@yoursite.com</p>
              </div>
              <div className="ml-30">
                <h1 className="text-xl font-bold  text-black">PHONE:</h1>
                <p className="text-xl text-blue-500 mt-2 ">+ 1235 2355 98</p>
              </div>
            </div>
            <div className="mt-10">
              <table>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-black/20 w-80 h-15 rounded-sm p-5 focus-within:border-blue-500 text-xl text-black/50 outline-none"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-black/20 w-80 h-15 rounded-sm p-5 focus-within:border-blue-500 text-xl text-black/50 outline-none ml-8"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-black/20 w-80 h-15 rounded-sm p-5 focus-within:border-blue-500 text-xl text-black/50 outline-none ml-8"
                />
                <textarea
                  rows={5}
                  type="text"
                  placeholder="Create a message here"
                  className="border border-black/20 w-[1025px] h-50 rounded-sm p-5 focus-within:border-blue-500 text-xl text-black/50 outline-none mt-3"
                />
              </table>
              <button className="text-white text-md font-bold bg-blue-500 p-4 rounded-sm mt-2">
                SEND MESSAGE
              </button>
            </div>
            <h2 className="text-2xl text-black mt-20">Follow us here</h2>
            <div className="flex gap-5 mt-5">
              {platforms.map((data, key) => (
                <div className="" key={key}>
                  <a
                    href=""
                    className="text-blue-500 text-base font-bold hover:text-black duration-300"
                  >
                    {data.media}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#e8eaed] w-290 h-125 justify-items-center text-center pt-40 ">
          <FaExclamation className="bg-[#757575] text-white/80 text-sm p-3 h-12 w-12 rounded-full" />
          <h1 className="text-3xl text-black/70 mt-5 ">
            Oops! Something went wrong.
          </h1>
          <p className='mt-10'>
            This page didn't load Google Maps correctly. See the JavaScript
            console for technical details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact