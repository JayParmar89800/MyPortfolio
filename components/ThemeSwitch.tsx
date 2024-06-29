"use client"
import { FC, useEffect, useState } from "react";
import { AiFillSun } from 'react-icons/ai';
import { BiSolidMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

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
console.log(resolvedTheme,"resolvedTheme")
  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center p-1 rounded-full cursor-pointer",
        className
      )}
      onClick={toggleTheme}
    >
      <button>
        {isLight ? <BiSolidMoon color='black' size={16} /> : <AiFillSun />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
