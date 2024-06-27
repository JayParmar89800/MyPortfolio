import React from "react";
import { FiDownload } from "react-icons/fi";

// Components
import Stats from "./Stats";
import { Button } from "./ui/button";
import Socials from "./Socials";
import Photo from "./Photo";

const HeroContent = () => {
  return (
    <section className="h-screen flex flex-col justify-center ">
      <div className="container mx-auto flex flex-col lg:justify-around h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left ">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="bg-gradient-to-b from-white to-accent bg-clip-text text-transparent">
                Jay Parmar
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As a passionate frontend developer, I bring ideas to life by
              crafting visually stunning and highly functional web experiences
              that are both user-centric and innovative
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className=" mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default HeroContent;
