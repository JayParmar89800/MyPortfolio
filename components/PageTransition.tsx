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
          className="h-screen w-screen fixed dark:bg-gradient-to-r dark:from-black dark:to-[#01293c] bg-gradient-to-r from-white to-[#01293c] top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
