import { motion } from "framer-motion";

const ScrollFade = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
