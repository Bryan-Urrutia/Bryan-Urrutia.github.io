"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const template = ({ children }) => {
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.4, duration: 0.4 }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default template;
