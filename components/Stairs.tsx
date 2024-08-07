import React from "react";
import { animate, motion } from "framer-motion";

// Variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//  calculate the reverse index for stagged delay
const reverseIndex = (index: any) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs each representing  a step of the stairs.
      
        Each div will have same animation  define by the StairsAnimation object.

        The delay for each div is calculated sinamically based on it's reverse index,
        creating a stagged effect with decresing delay for each subsequent step.
      */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full dark:bg-white bg-black relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
