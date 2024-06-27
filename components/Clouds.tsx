"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroIconsCloud from "./HeroIconsCloud";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[460px] xl:h-[460px] absolute top-[10px] right-[10px] rounded-full from-[#2CBDFF] via-[#ffffff] to-[#00A7FA] bg-gradient-135"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="My Photo"
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[480px] h-[300px] xl:h-[480px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00a7fa"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 20 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
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
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[460px] xl:h-[460px]"
        >
          {/* <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="My Photo"
            className="object-contain rounded-full"
          /> */}
          <HeroIconsCloud/>
        </motion.div>
        {/* circle */}
        {/* <motion.svg
          className="w-[300px] xl:w-[480px] h-[300px] xl:h-[480px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00a7fa"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 20 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg> */}
      </motion.div>
    </div>
  );
};

export default Clouds;
