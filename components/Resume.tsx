"use client";

import { about, education, experience } from "@/config/site";
import React, { useEffect, useState } from "react";
import Clouds from "./Clouds";
import { ScrollArea } from "./ui/scroll-area";
import { BorderBeam } from "./magicui/border-beam";


const Resume = () => {
  const [sticky, setSticky] = useState(false);
  const [fadeInClass, setFadeInClass] = useState("method__single--1");

  useEffect(() => {
    const handleScroll = () => {

      const method = document.querySelector(".method") as HTMLElement | null;
      const methodWrap = document.querySelector(".method__wrap") as HTMLElement | null;
      const methodInner = document.querySelector(".method__inner") as HTMLElement | null;
      const methodTop = methodInner?.offsetTop ?? 0;
      const fourthMethodHeight = (method?.clientHeight ?? 0) / 4;

      if (window.scrollY > methodTop) {
        setSticky(true);
        setFadeInClass("method__single--1");
      } else {
        setSticky(false);
      }
      if (window.scrollY > methodTop + fourthMethodHeight) {
        setFadeInClass("method__single--2");
      }
      if (window.scrollY > methodTop + fourthMethodHeight * 2) {
        setFadeInClass("method__single--3");
      }
      if (window.scrollY > methodTop + fourthMethodHeight * 3) {
        setSticky(false);
        setFadeInClass("method__single--4");
      }
    };

    const handleResize = () => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="method">
      <div className="method__inner">
        <div className={`method__wrap ${sticky ? "sticky" : ""}`}>
          <div
            className={`method__single method__single--1 panel container z-20 ${
              fadeInClass === "method__single--1" ? "fade-in" : ""
            }`}
          >
            <div className="method__inside w-full flex xl:flex-row flex-col justify-between items-center">
              <div className="method__img xl:w-1/2 w-full">
                <h2 className="h2 text-center">
                  <span>✨</span>
                  <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
                    Skills
                  </span>
                </h2>
              </div>
              <div className="method__content xl:w-1/2 w-full ">
                <div className=" mb-8 xl:mb-0">
                  <Clouds />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`method__single method__single--2 container ${
              fadeInClass === "method__single--2" ? "fade-in" : ""
            }`}
          >
            <div className="method__inside w-full flex xl:flex-row flex-col justify-between items-center xl:py-3">
              <div className="method__img xl:w-1/2 w-full">
                <h2 className="h2 text-center">
                  <span>✨</span>
                  <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
                    Experience
                  </span>
                </h2>
              </div>
              <div className="method__content xl:w-1/2 w-full ">
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border-[0.2px] dark:border-custom-dark border-custom-light dark:text-white text-black shadow-lg relative h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                        >
                          <span className="text-accent font-bold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-black lg:text-start text-center">
                              {item.company}
                            </p>
                          </div>
                          <BorderBeam size={250} duration={7} delay={9} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </div>
          </div>
          <div
            className={`method__single method__single--3 container ${
              fadeInClass === "method__single--3" ? "fade-in" : ""
            }`}
          >
            <div className="method__inside w-full flex xl:flex-row flex-col justify-between items-center">
              <div className="method__img xl:w-1/2 w-full">
                <h2 className="h2 text-center">
                  <span>✨</span>
                  <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
                    Education
                  </span>
                </h2>
              </div>
              <div className="method__content xl:w-1/2 w-full ">
                <ScrollArea className=" h-[500px] xl:h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border-[0.2px] dark:border-custom-dark border-custom-light dark:text-white text-black shadow-lg relative h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                        >
                          <span className="text-accent font-bold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-black lg:text-start text-center">
                              {item.intituation}
                            </p>
                          </div>
                          <BorderBeam size={250} duration={7} delay={9} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </div>
          </div>
          <div
            className={`method__single method__single--4 container ${
              fadeInClass === "method__single--4" ? "fade-in" : ""
            }`}
          >
            <div className="method__inside w-full flex xl:flex-row flex-col justify-between items-center">
              <div className="method__img xl:w-1/2 w-full">
                <h2 className="h2 text-center">
                  <span>✨</span>
                  <span className="dark:bg-gradient-to-b dark:from-white dark:to-accent bg-gradient-to-b from-black to-accent bg-clip-text text-transparent">
                    About me
                  </span>
                </h2>
              </div>
              <div className="method__content xl:w-1/2 w-full ">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start gap-4"
                      >
                        <span className="dark:text-white/60 text-black">
                          {item.fieldname}
                        </span>
                        <span className="dark:text-white text-black text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Resume;
