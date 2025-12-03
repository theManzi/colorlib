import { useState } from "react";
import { FaShoppingCart, FaSquare, FaTabletAlt } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { SlScreenSmartphone } from "react-icons/sl";
import { TiTimes } from "react-icons/ti";

const DevicePreview = ({ children }) => {
  const [device, setDevice] = useState("desktop");

  const sizes = {
    phone: "375px",
    tablet: "768px",
    desktop: "100%",
  };

  return (
    <div className="min-h-screen pb-4">
      <div className="flex items-center bg-[#333333]">
        <div className="flex cursor-pointer p-4">
          <h1 className="text-5xl font-semibold text-white">Colorlib</h1>
          <span className="pt-8 pr-1">
            <FaSquare className="text-green-500 text-base p-1" />
          </span>
        </div>
        <div className="border bg-[#222222] py-6 px-12 text-center justify-items-center">
          <h1 className="text-xl text-white/50">+ UNIONCORP</h1>
        </div>
        {/* Device Icons */}
        <div className="flex text-4xl ml-180 ">
          <div className="border border-white/10 p-3 px-5 hover:bg-black hover:text-white duration-300">
            <HiMiniComputerDesktop
              className={`cursor-pointer ${
                device === "desktop" ? "text-gray-500" : "text-gray-500"
              }`}
              onClick={() => setDevice("desktop")}
            />
          </div>
          <div className="border border-white/10 p-3 px-5  hover:bg-black hover:text-white duration-300">
            <FaTabletAlt
              className={`cursor-pointer ${
                device === "tablet" ? "text-gray-500" : "text-gray-500"
              }`}
              onClick={() => setDevice("tablet")}
            />
          </div>
          <div className="border border-white/10 p-3 px-5 hover:bg-black hover:text-white duration-300">
            <SlScreenSmartphone
              className={`cursor-pointer ${
                device === "phone" ? "text-gray-500" : "text-gray-500"
              }`}
              onClick={() => setDevice("phone")}
            />
          </div>
          <div className="bg-[#7ac64d] border border-white/10 p-3 px-5 hover:bg-black hover:text-white duration-300">
            <FaShoppingCart className="text-white" />
          </div>
          <div className=" border border-white/10 p-3 px-5 hover:bg-black hover:text-white duration-300">
            <TiTimes className="text-5xl text-gray-500" />
          </div>
        </div>
      </div>

      {/* Preview Container */}
      <div className="min-h-screen pb-4 flex flex-col items-center">
        <div
          className="mx-auto shadow-xl border items-center justify-center overflow-hidden "
          style={{
            width: sizes[device],
            transition: "0.3s ease",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DevicePreview;
