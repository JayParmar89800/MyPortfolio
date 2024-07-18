"use client";

import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";
import { Button } from "./ui/button";
import Socials from "./Socials";
import BoxReveal from "./magicui/box-reveal";
import { useTheme } from "next-themes";

const HeroContent = () => {

  const { resolvedTheme } = useTheme();
  const [pdfDownloadLink, setPdfDownloadLink] = useState("/JayParmar.pdf");

  useEffect(() => {
    if (resolvedTheme) {
      setPdfDownloadLink(
        resolvedTheme === "dark" ? "/JayParmar-darkmode.pdf" : "/JayParmar.pdf"
      );
    }
  }, [resolvedTheme]);

  return (
    <section className="h-screen flex flex-col justify-center dark:text-white text-black">
      <div className="container mx-auto flex flex-col lg:justify-around h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {/* text */}
          <div className="text-center xl:text-left flex flex-col justify-center xl:justify-start">
            <h1 className="h1 mb-6">
              <div className="xl:w-auto w-full flex justify-center">
                <BoxReveal boxColor={"#005b94"} duration={0.5}>
                  <span>Hello I'm</span>
                </BoxReveal>
              </div>
              <div className="xl:w-auto w-full flex justify-center">
                <BoxReveal boxColor={"#005b94"} duration={0.5}>
                  <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
                    Jay Parmar
                  </span>
                </BoxReveal>
              </div>
            </h1>
            <BoxReveal boxColor={"#005b94"} duration={0.5}>
              <p className="max-w-[500px] mb-9 text-center">
                As a passionate frontend developer, I bring ideas to life by
                crafting visually stunning and highly functional web experiences
                that are both user-centric and innovative
              </p>
            </BoxReveal>

            <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
              <BoxReveal boxColor={"#005b94"} duration={0.5}>
                <a href={pdfDownloadLink} download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                </a>
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
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default HeroContent;
