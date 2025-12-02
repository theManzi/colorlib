import React, { useEffect, useRef, useState } from "react";
import Tittle from "./tittle";
import { GrFormSearch } from "react-icons/gr";
import Counter from "./counter";
import ScrollFade from "./scrollFade";

const Couterpage = () => {
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
          <ScrollFade>
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
                    {startCount ? <Counter end={9200} /> : "0"}
                  </h1>
                  <p className="text-xl font-bold mt-2">Satisfied Customers</p>
                </div>

                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold">
                    {startCount ? <Counter end={5800} /> : "0"}
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
          </ScrollFade>
        </div>
      </div>
    </div>
  );
};

export default Couterpage;
