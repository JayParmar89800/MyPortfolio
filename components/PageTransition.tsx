"use client";
import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
usePathname;
type Props = {
  children: React.ReactNode;
};
const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed dark:bg-gradient-to-r dark:from-black dark:to-[#01293c] bg-white top-0 pointer-events-none"
        />
        <div className="dark:hidden gradient-01 blur-[110px] dark:blur-[125px] w-44 h-44 fixed top-[80%]  xl:top-[20%] left-0 z-0 " />
        <div className="dark:hidden gradient-04 blur-[110px] dark:blur-[125px] w-44 h-44 fixed top-[48%] right-0 z-0 " />
        <div className="dark:hidden gradient-03 blur-[110px] dark:blur-[125px] w-44 h-44 fixed bottom-[1%]  xl:bottom-[46%] left-0 z-0 " />
        <div className="dark:hidden gradient-02 blur-[110px] dark:blur-[125px] w-44 h-44 fixed bottom-[5%] left-[70%] z-0 " />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
