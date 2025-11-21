import React from 'react'
import Tittle from './tittle'
import { image, p, title } from 'framer-motion/client';
import { GrMoney } from 'react-icons/gr';

const Services = () => {
  const services = [
    {
      title: "Financial Planning",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Investment Management",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Retirement Solutions",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Tax Advisory",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Estate Planning",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Risk Management",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Technology Management",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Consulting Services",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia.", 
      
    }
  ];
  return (
    <div className="justify-center items-center">
      <div className="p-30 pl-50 text-center">
        <Tittle
          head1="Services"
          head2="Our Exclusive Services We Offer For You"
        />
      </div>

      <div className="grid grid-cols-4 justify-center items-center space-x-10 pb-50">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="clip-path-[polygon(27%_0,77%_0,77%_34%,58%_34%,52%_46%,45%_35%,27%_35%)] w-32 h-32 bg-[#ffffff] ml-30 mt-30 justify-items-center-safe"><GrMoney className='h-20 w-20 text-blue-500 pt-5'/></div>
            <h1 className="text-3xl  font-semibold pt-5 text-black">
              {service.title}
            </h1>
            <p className="text-2xl pt-5 text-black/40">{service.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services