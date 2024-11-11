import { Variants } from "framer-motion";

const downloadBtnChildVariatnts = {
  variantA: { rotate: 0 },
  variantB: { rotate: -90 },
};

type Direction = "left" | "right" | "up" | "down";

const slideInAnime = (delay: number = 0, direction: Direction) => {
  const axis = {
    left: "-100vw",
    right: "100vw",
    up: "-100vh",
    down: "100vh",
  }[direction];

  return {
    hidden: {
      x: direction === "left" || direction === "right" ? axis : 0,
      y: direction === "up" || direction === "down" ? axis : 0,
      opacity: 0,
    },
    show: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 1,
      transition: {
        delay: delay,
        ease: "easeInOut",
        duration: 1,
        type: "spring",
        stiffness: 40,
      },
    },
    exit: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 0,
      transition: {
        delay: delay,
        ease: "easeOut",
        duration: 1,
        type: "spring",
        stiffness: 40,
      },
    },
  };
};

const popUpVariants = (delay: number = 0.9) => {
  return {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        // duration: 3,
        delay: delay,
        type: "spring",
        // damping: 10,
        // mass: 0.2,
        stiffness: 100,
      },
    },
  };
};

const floatAnimateVariants = {
  x: [0, 6, 0, 5],
  y: [0, 7, 0, 10],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "linear",
  },
};

const textContainer = (duration: number, delay: number = 0) => ({
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: duration, delayChildren: i * delay },
  }),
});

const textChild = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 120,
    },
  },
  hidden: {
    opacity: 0,
    y: 55,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 120,
    },
  },
};

const fadeAnime = (delay: number = 0) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: 5,
      type: "spring",
      damping: 12,
      stiffness: 60,
    },
  },
});

const FlipInY = {
  hidden: {
    opacity: 0,
    rotateY: 180,
  },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 45,
      delay: 0.5,
    },
  },
};

const rotateIn = (delay: number = 0, direction: Direction = "up", degree: number = 0) => {
  const axis = {
    left: "-100vw",
    right: "100vw",
    up: "-100vh",
    down: "100vh",
  }[direction];

  return {
    hidden: {
      x: direction === "left" || direction === "right" ? axis : 0,
      y: direction === "up" || direction === "down" ? axis : 0,
      opacity: 0,
      rotate: degree,
    },
    show: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: delay,
        ease: "easeInOut",
        type: "spring",
        duration: 2,
        damping: 5,
        stiffness: 12,
      },
    },
  };
};

const squeezeIn = (delay: number = 0, direction: Direction = "up", degree: number = 0) => {
  const axis = {
    left: "-100vw",
    right: "100vw",
    up: "-100vh",
    down: "100vh",
  }[direction];

  return {
    hidden: {
      x: direction === "left" || direction === "right" ? axis : 0,
      y: direction === "up" || direction === "down" ? axis : 0,
      opacity: 0,
      rotateX: degree,
    },
    show: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: delay,
        ease: "easeInOut",
        type: "spring",
        duration: 2,
        damping: 5,
        stiffness: 12,
      },
    },
  };
};

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 12,
      stiffness: 120,
    },
  },
};

const fadeIn = (delay: number = 0, direction: Direction = "up") => {
  const axis = {
    left: "-100vw",
    right: "100vw",
    up: "-100vh",
    down: "100vh",
  }[direction];

  return {
    hidden: {
      x: direction === "left" || direction === "right" ? axis : 0,
      y: direction === "up" || direction === "down" ? axis : 0,
      opacity: 0,
    },
    show: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 1,
      transition: {
        delay: delay,
        ease: "easeInOut",
        duration: 1.3,
      },
    },
    exit: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 0,
      transition: {
        delay: delay,
        ease: "easeOut",
        duration: 1,
      },
    },
  };
};

const blurFadeIn = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: -10,
    filter: "blur(8px)",
    scale: 1.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
  },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 100,
    damping: 10,
    delay,
  },
});


const formVariants = (delay: number = 0, direction: Direction = "up", degree: number = 0) => {
  const axis = {
    left: "-100vw",
    right: "100vw",
    up: "-100vh",
    down: "100vh",
  }[direction];

  return {
    hidden: {
      x: direction === "left" || direction === "right" ? axis : 0,
      y: direction === "up" || direction === "down" ? axis : 0,
      opacity: 0,
      rotateX: degree,
    },
    show: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: delay,
        ease: "easeInOut",
        type: "spring",
        duration: 1.3,
        damping: 7,
        stiffness: 16,
      },
    },
  };
};

const fadeInOutVariants: Variants = {
  hidden: { y: -100, opacity: 0, transition: { duration: 0.5 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const pullDownVariants = (): Variants => {
  return {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        // delay: delay,
        // ease: "easeInOut",
        type: "spring",
        // duration: 1.3,
        damping: 5,
        stiffness: 40,
      },
    },
  }
};

const staggerContainer = (delay: number = 0.2): Variants => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  }
}

export {
  downloadBtnChildVariatnts,
  FlipInY,
  cardVariant,
  fadeAnime,
  fadeIn,
  floatAnimateVariants,
  formVariants,
  popUpVariants,
  rotateIn,
  slideInAnime,
  squeezeIn,
  textChild,
  textContainer,
  blurFadeIn,
  fadeInOutVariants,
  pullDownVariants,
  staggerContainer
};
