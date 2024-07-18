"use client";

import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import Scroll from "./Scroll";
import Iconify from "./iconify/iconify";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleToggle} className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] text-accent" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              right: -300,
            }}
            animate={{
              opacity: 1,
              right: 0,
            }}
            exit={{
              opacity: 0,
              right: -300,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="min-[500px]:w-1/2 md:w-2/5 w-100 z-[99] fixed h-[100vh] transition-all left-0 top-0 min-[1070px]:hidden flex flex-col overflow-y-auto !shadow-none backdrop-blur-lg dark:bg-black/30"
            id="style-4"
          >
            <div className="flex flex-col h-full p-4">
              <button
                onClick={handleToggle}
                className="m-4 ms-auto text-gray-400 bg-transparent"
              >
                <Iconify
                  icon="solar:close-square-linear"
                  width={48}
                  height={48}
                />
              </button>

              <div className="flex flex-col h-full">
                <nav className="flex flex-col justify-center items-center gap-8 my-auto ">
                  <ul className="flex flex-col justify-center items-center gap-8">
                    {siteConfig.navItems.map((link, index) => (
                      <li
                        key={link.path}
                        className="hover:text-accent hover:border-b-2 hover:border-accent"
                      >
                        <Scroll
                          to={link.path.replace("/", "").toLowerCase()}
                          className="capitalize font-medium hover:text-accent transition-all cursor-pointer"
                          onClick={handleClose}
                        >
                          {link.label}
                        </Scroll>
                      </li>
                    ))}
                    <Scroll to="contact"  onClick={handleClose}>
                      <Button>Hire me</Button>
                    </Scroll>
                  </ul>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
