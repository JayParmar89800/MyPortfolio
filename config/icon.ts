import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNextui,
  SiMui,
  SiGithub,
} from "react-icons/si";

const icon = (Component: IconType) => React.createElement(Component);

export const ICONS = {
  html: icon(FaHtml5),
  css: icon(FaCss3),
  js: icon(FaJs),
  react: icon(FaReact),
  figma: icon(FaFigma),
  nodejs: icon(FaNodeJs),
  nextjs: icon(SiNextdotjs),
  tailwindcss: icon(SiTailwindcss),
  bootstrap: icon(FaBootstrap),
  nextui: icon(SiNextui),
  mui: icon(SiMui),
  github: icon(SiGithub),
  phone:icon(FaPhoneAlt),
  email:icon(FaEnvelope),
  address:icon(FaMapMarkerAlt)
};
