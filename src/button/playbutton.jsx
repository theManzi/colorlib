import { motion } from "framer-motion";
import { IoIosPlay } from "react-icons/io";

export default function PlayButton() {
  return (
    <div className="relative flex items-center justify-center w-[150px] h-[150px]">
      {/* Wave 1 */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-30"
        animate={{
          scale: [0.5, 1.4],
          opacity: [0.5, 0]
          
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

     

      {/* Actual Play Button */}
      <div className="flex items-center justify-center bg-blue-500 w-25 h-25 rounded-full text-white">
        <IoIosPlay size={40} />
      </div>
    </div>
  );
}
