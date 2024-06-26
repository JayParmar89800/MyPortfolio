"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";
import { Button } from "./ui/button";
import Socials from "./Socials";
import BoxReveal from "./magicui/box-reveal";
import Clouds from "./Clouds";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <section className="h-screen flex flex-col justify-center dark:text-white text-black">
      <div className="container mx-auto flex flex-col lg:justify-around h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left flex flex-col justify-center xl:justify-start">
            <motion.div
              animate={{
                y: [0, -10],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="xl:w-auto w-full flex justify-center xl:justify-start mb-3"
            >
              <BoxReveal boxColor={"#005b94"} duration={0.5}>
              
                <AnimatedGradientText>
                  🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Front-end Developer
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </BoxReveal>
            </motion.div>

            <h1 className="h1 mb-6">
              <div className="xl:w-auto w-full flex justify-center xl:justify-start">
                <BoxReveal boxColor={"#005b94"} duration={0.5}>
                  <span>Hello I'm</span>
                </BoxReveal>
              </div>
              <div className="xl:w-auto w-full flex justify-center xl:justify-start">
                <BoxReveal boxColor={"#005b94"} duration={0.5}>
                  <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
                    Jay Parmar
                  </span>
                </BoxReveal>
              </div>
            </h1>
            <BoxReveal boxColor={"#005b94"} duration={0.5}>
              <p className="max-w-[500px] mb-9">
                As a passionate frontend developer, I bring ideas to life by
                crafting visually stunning and highly functional web experiences
                that are both user-centric and innovative
              </p>
            </BoxReveal>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <BoxReveal boxColor={"#005b94"} duration={0.5}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </BoxReveal>
              <div className="mb-8 xl:mb-0">
                <BoxReveal boxColor={"#005b94"} duration={0.5}>
                  <Socials
                    containerStyle="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </BoxReveal>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className=" mb-8 xl:mb-0">
            <Clouds />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default HeroContent;
