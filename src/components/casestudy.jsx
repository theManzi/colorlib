// import React from 'react'
// import Tittle from './tittle'
// import { FaSearch } from 'react-icons/fa';
// import { GrFormSearch } from 'react-icons/gr';

// const Casestudy = () => {
//     const image = [
    
//     {img:'gallery-1.jpg'},
//         { img: 'gallery-2.jpg' },
//         { img: 'gallery-3.jpg' },
//         { img: 'gallery-4.jpg' },
//     ]
//   return (
//     <div>
//       <div className="p-30 pl-50 text-center">
//         <Tittle
//           head1="Case Study"
//           head2="We Take Every Case Studies Very Seriously"
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         {image.map((images, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden group cursor-pointer"
//           >
//             {/* Image */}
//             <img
//               src={images.img}
//               alt="case study"
//               className=" object-cover transition duration-500 group-hover:brightness-50 h-115 w-screen"
//             />

//             {/* Overlay Text */}
//             <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
//               <h1 className="text-white text-4xl font-bold mt-70 m-10">
//                 Business Finance consulting
//               </h1>
//               <h1 className="text-white text-4xl font-bold mb-90 ">
//                 <GrFormSearch className="bg-green-500 text-sm h-14 w-13 rounded-sm" />
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div
//         className="relative bg-caver bg-center"
//         style={{
//           background: "url('/bg_3.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "500px",
//         }}
//       >
//         <div className="absolute inset-0 bg-blue-500/80 justify-items-center">
//           <h1 className="text-white/90 text-xl font-bold mt-25">
//             Great Reviews for our services
//           </h1>
//           <h1 className="text-white/90 text-6xl font-semibold mt-5">
//             Technical Statistics
//                   </h1>
           
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Casestudy




import React, { useEffect, useRef, useState } from "react";
import Tittle from "./tittle";
import { GrFormSearch } from "react-icons/gr";
import Counter from "./counter";


const Casestudy = () => {
  const image = [
    { img: "gallery-1.jpg" },
    { img: "gallery-2.jpg" },
    { img: "gallery-3.jpg" },
    { img: "gallery-4.jpg" },
  ];

 
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
     
      <div className="p-30 pl-50 text-center">
        <Tittle
          head1="Case Study"
          head2="We Take Every Case Studies Very Seriously"
        />
      </div>

      
      <div className="flex justify-center items-center">
        {image.map((images, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
           
            <img
              src={images.img}
              alt="case study"
              className="object-cover transition duration-500 group-hover:brightness-50 h-115 w-screen"
            />

            
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h1 className="text-white text-4xl font-bold mt-70 m-10">
                Business Finance consulting
              </h1>

              <h1 className="text-white text-4xl font-bold mb-102">
                <GrFormSearch className="bg-green-500 text-sm h-14 w-13 rounded-sm" />
              </h1>
            </div>
          </div>
        ))}
      </div>

     
      <div
        className="relative bg-caver bg-center"
        style={{
          background: "url('/bg_3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-blue-500/80 text-center">
          <div ref={statsRef} className="mt-25">
            <h1 className="text-white/90 text-xl font-bold">
              Great Reviews for our services
            </h1>

            <h1 className="text-white/90 text-6xl font-semibold mt-5">
              Technical Statistics
            </h1>

           
            <div className="grid grid-cols-4 gap-10 mt-30">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold">
                  {startCount ? <Counter end={60} /> : "0"}
                </h1>
                <p className="text-xl font-bold mt-2">Year of Experienced</p>
              </div>

              <div className="text-center text-white">
                <h1 className="text-5xl font-bold">
                  {startCount ? <Counter end={(9,200)} /> : "0"}
                </h1>
                <p className="text-xl font-bold mt-2">Satisfied Customers</p>
              </div>

              <div className="text-center text-white">
                <h1 className="text-5xl font-bold">
                  {startCount ? <Counter end={(5,800)} /> : "0"}
                </h1>
                <p className="text-xl font-bold mt-2">Project Completed</p>
              </div>

              <div className="text-center text-white">
                <h1 className="text-5xl font-bold">
                  {startCount ? <Counter end={100} /> : "0"}
                </h1>
                <p className="text-xl font-bold mt-2">Get Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
