"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
      if (scrollTop > 0) {
        const timeout = setTimeout(() => {}, 3000);
        return () => clearTimeout(timeout);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="py-8 dark:text-white text-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        {isScrolled && matches ? (
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex basis-1/5"
          >
            <Link href="/" className="text-4xl  font-semibold">
              Jay<span className="text-accent">.</span>
            </Link>
          </motion.div>
        ) : (
          <div className="flex basis-1/5">
            <Link href="/" className="text-4xl  font-semibold">
              Jay<span className="text-accent">.</span>
            </Link>
          </div>
        )}
        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8 justify-center">
          {isScrolled ? (
            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className={`hidden md:flex gap-2 z-50  fixed mx-auto}`}
            >
              <motion.div
              animate={{
                y: [0, -7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              
              className="mx-auto backdrop-blur-lg bg-transparent py-2 ps-5 pe-[0.45rem] border border-accent rounded-full">
              <Nav />
            </motion.div>
            </motion.div>
          ) : (
            <div className="flex justify-center items-center py-2 ps-5 pe-[0.45rem]">
              <Nav />
            </div>
          )}
        </div>
        {isScrolled && matches ? (
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="md:flex hidden  basis-1/5 justify-end"
          >
            <ThemeSwitch />
          </motion.div>
        ) : (
          <div className="md:flex hidden  basis-1/5 justify-end">
            <ThemeSwitch />
          </div>
        )}
        {/* Mobile nav */}
        <div className="md:hidden flex">
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
