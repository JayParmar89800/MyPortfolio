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
          className="h-screen w-screen fixed bg-gradient-to-r from-primary to-[#006191] top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
