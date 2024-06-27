"use client";
import React from "react";
import Image from "next/image";
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-96 sm:h-[90vh] w-full flex flex-col relative">
      <div className="w-full mx-auto h-full  flex flex-col relative justify-center">
        <div className="relative flex flex-col ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
            }}
            className="text-center  font-extrabold text-fluid-2xl tracking-wide p-0"
          >
            <VelocityScroll
              text="FRONT-END"
              default_velocity={10}
              className="bg-gradient-to-b from-white to-accent text-transparent bg-clip-text"
            />
          </motion.div>
        </div>
        <div className="relative flex flex-col dark:text-white text-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
            }}
            className="text-center font-extrabold text-fluid-2xl tracking-wide text-stroke-sm  md:text-stroke-md dark:text-stroke-color-white text-stroke-color-black mx-auto w-full z-40"
          >
            {/* DEVELOPER */}
            <VelocityScroll
              text="DEVELOPER"
              default_velocity={-10}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
            }}
            className="text-center  font-extrabold text-fluid-2xl tracking-wide  absolute mx-auto w-full"
          >
            {/* DEVELOPER */}
            <VelocityScroll
              text="DEVELOPER"
              default_velocity={-1}
            />
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
            }} className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 mx-auto   z-30">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="My Photo"
            className="object-contain rounded-full "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
