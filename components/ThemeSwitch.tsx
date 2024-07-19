"use client"
import { FC, useEffect, useState } from "react";
import { AiFillSun } from 'react-icons/ai';
import { BiSolidMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = resolvedTheme === "light";
  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={clsx(
        "flex items-center justify-center p-1 rounded-full cursor-pointer",
        className
      )}
      onClick={toggleTheme}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {isLight ? <BiSolidMoon color="black" size={16} /> : <AiFillSun size={18} />}
      </motion.button>
    </motion.div>
  );
};

export default ThemeSwitch;
