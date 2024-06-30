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
  const matches = useMediaQuery("(min-width: 1200px)");

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
          >
            <Link href="/" className="text-4xl  font-semibold">
              Jay<span className="text-accent">.</span>
            </Link>
          </motion.div>
        ) : (
          <div>
            <Link href="/" className="text-4xl  font-semibold">
              Jay<span className="text-accent">.</span>
            </Link>
          </div>
        )}
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8 justify-center">
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
              className={`hidden xl:flex gap-2 z-50 backdrop-blur-lg bg-transparent py-2 ps-5 pe-[0.45rem] border border-accent rounded-full fixed mx-auto}`}
            >
              <Nav />
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
            className="xl:flex hidden"
          >
            <ThemeSwitch />
          </motion.div>
        ) : (
          <div className="xl:flex hidden">
            <ThemeSwitch />
          </div>
        )}
        {/* Mobile nav */}
        <div className="xl:hidden flex">
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
