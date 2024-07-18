"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroIconsCloud from "./HeroIconsCloud";

const Clouds = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[290px] h-[290px] xl:w-[460px] xl:h-[460px] mx-auto"
        >
          <HeroIconsCloud/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Clouds;
