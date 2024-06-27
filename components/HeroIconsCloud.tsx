import React from 'react'
import IconCloud from './magicui/icon-cloud';

const slugs = [
    "typescript",
    "javascript",
    "redux",
    "mui",
    "nextui",
    "tailwindcss",
    "bootstrap",
    "react",
    "html5",
    "css3",
    "express",
    "nextdotjs",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];
  

const HeroIconsCloud = () => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-10 pb-10 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}

export default HeroIconsCloud
