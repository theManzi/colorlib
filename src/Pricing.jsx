import React from 'react'
import BackGround from './components/background'
import Tittle from './components/tittle'
import { IoIosArrowRoundForward } from 'react-icons/io';

const Pricing = () => {
  return (
    <div>
      <BackGround to="/" name="HOME" page="PRICING" pageName="Pricing" />
      <div className="bg-[#f9faff] w-screen">
        <div className="bg-[#f9faff] text-center w-creen pt-50">
          <Tittle head1="Our Pricing" head2="Find Plan that is Right for You" />
        </div>

        {/* cords */}
        <div className="flex gap-7 justify-items-center p-10 ml-15 pb-50">
          <div className="bg-white h-180 w-80 rounded-sm text-center">
            <h1 className="text-green-500 text-2xl pt-10">Free</h1>
            <span className="flex gap-5 pt-5">
              <h1 className="text-black/30 text-2xl font-semibold pl-25 pt-2">
                $
              </h1>
              <h1 className="text-black text-6xl font-semibold">50</h1>
            </span>
            <div className="justify-center items-center m-7 text-center space-y-8 font-semibold">
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Live Chat Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Minimum of 10 users</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">Easily Track Payments</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">Web Conference Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">
                  Group Management of users
                </p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">Remote Monitory</p>
              </div>
            </div>
            <button className="bg-green-400 text-white text-base font-semibold hover:shadow-xl w-50 h-17 rounded-xl mt-5">
              GET STARTED
            </button>
          </div>

          {/* card2 */}
          <div className="group hover:shadow-2xl duration-300 bg-white h-180 w-80 rounded-sm text-center">
            <h1 className="text-blue-500 text-2xl pt-10 group-hover:text-green-500">
              Basic Plan
            </h1>
            <span className="flex gap-5 pt-5">
              <h1 className="text-black/30 text-2xl font-semibold pl-25 pt-2">
                $
              </h1>
              <h1 className="text-black text-6xl font-semibold">79</h1>
            </span>
            <div className="justify-center items-center m-7 text-center space-y-8 font-semibold">
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Live Chat Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Minimum of 10 users</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Easily Track Payments</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">Web Conference Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">
                  Group Management of users
                </p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">Remote Monitory</p>
              </div>
            </div>
            <button className="bg-blue-400 text-white text-base font-semibold group-hover:bg-green-500 w-50 h-17 rounded-xl mt-5">
              GET STARTED
            </button>
          </div>

          {/* card3 */}
          <div className="group hover:shadow-2xl duration-300 bg-white h-180 w-80 rounded-sm text-center">
            <h1 className="text-blue-500 text-2xl pt-10 group-hover:text-green-500">
              Professional
            </h1>
            <span className="flex gap-5 pt-5">
              <h1 className="text-black/30 text-2xl font-semibold pl-25 pt-2">
                $
              </h1>
              <h1 className="text-black text-6xl font-semibold">89</h1>
            </span>
            <div className="justify-center items-center m-7 text-center space-y-8 font-semibold">
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Live Chat Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Minimum of 10 users</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Easily Track Payments</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Web Conference Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Group Management of users</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black/20 text-xl">Remote Monitory</p>
              </div>
            </div>
            <button className="bg-blue-400 group-hover:bg-green-500 text-white text-base font-semibold hover:shadow-xl w-50 h-17 rounded-xl mt-5">
              GET STARTED
            </button>
          </div>

          {/* card4 */}

          <div className="group hover:shadow-2xl duration-300 bg-white h-180 w-80 rounded-sm text-center">
            <h1 className="text-blue-500 text-2xl pt-10 group-hover:text-green-500">
              Startup
            </h1>
            <span className="flex gap-5 pt-5">
              <h1 className="text-black/30 text-2xl font-semibold pl-25 pt-2">
                $
              </h1>
              <h1 className="text-black text-6xl font-semibold">99</h1>
            </span>
            <div className="justify-center items-center m-7 text-center space-y-8 font-semibold">
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Live Chat Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Minimum of 10 users</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Easily Track Payments</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Web Conference Support</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Group Management of users</p>
              </div>
              <div className="flex text-center">
                <IoIosArrowRoundForward className="text-2xl pt-2 " />
                <p className="text-black text-xl">Remote Monitory</p>
              </div>
            </div>
            <button className="bg-blue-400 group-hover:bg-green-500 text-white text-base font-semibold hover:shadow-xl w-50 h-17 rounded-xl mt-5">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing