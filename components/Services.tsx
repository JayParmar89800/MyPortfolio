"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { CardBody, CardContainer, CardItem } from "./aceternity/3d-card.tsx";
import Image from "next/image";

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-around py-12 max-[350px]:py-20 xl:py-0 my-3">
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
          className="grid grid-cols-1 md:grid-cols-2"
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
              <div key={index} className="flex justify-center">
                <CardContainer className="inter-var">
                  <CardBody className="flex flex-col gap-y-5 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-r dark:from-black dark:to-[#01293c] dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[22rem] lg:w-[25rem] xl:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={service.href}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {service.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
                    >
                      {service.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
