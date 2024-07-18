"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-around py-12 xl:py-0 my-3">
      <motion.div
        animate={{
          y: [0, -10],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="xl:w-auto w-full flex justify-center my-5"
      >
        <h2 className="h2 text-center">
          <span>✨</span>
          <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
            Services
          </span>
        </h2>
      </motion.div>
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {siteConfig.services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-stroke-sm  md:text-stroke-md dark:text-stroke-color-white text-stroke-color-black text-transparent group-hover:text-stroke-color-[#005b94] transition-all ">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full dark:bg-white bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="dark:text-primary text-white text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none dark:text-white text-black group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="dark:text-white/60 text-black">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b dark:border-white/20 border-black w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
