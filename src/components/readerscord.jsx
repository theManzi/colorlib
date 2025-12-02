import React from 'react'
import Tittle from './tittle'
import Cards from '../cords/cards';
import { motion } from 'framer-motion';

const ReadersCord = () => {

    const cardsData = [
      {
        image: "/staff-1.jpg",
        name: "Jason Smith",
        title: "President & CEO",
      },

      {
        image: "/staff-2.jpg",
        name: "Jeffrey Rockenson",
        title: "Executive Vice President",
      },
      {
        image: "/staff-3.jpg",
        name: "Jason Smith",
        title: "General Manager",
      },
      {
        image: "/staff-4.jpg",
        name: "Jason Smith",
        title: "Strategic Consultantr",
      },
      {
        image: "/staff-5.jpg",
        name: "David Wilson",
        title: "President & CEOr",
      },
      {
        image: "/staff-6.jpg",
        name: "Olivia Martinez",
        title: "Executive Vice President",
      },
      {
        image: "/staff-7.jpg",
        name: "James Taylor",
        title: "General Manager",
      },
      {
        image: "/staff-8.jpg",
        name: "Sophia Anderson",
        title: "Strategic Consultant",
      },
    ];
  return (
    <div>
      <div className="mt-40 text-center">
        <Tittle head1="Meet Our Brilliant Minds" head2="Our Leadership Team" />
      </div>
      <motion.div
        initial={{ rotateY: 90 }}
        whileInView={{ rotateY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
      >
        <div className="mt-20 gap-8 ml-5 grid grid-cols-4 items-center justify-center">
          {cardsData.map((card, index) => (
            <div key={index} className="inline-block ">
              <Cards image={card.image} name={card.name} title={card.title} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ReadersCord