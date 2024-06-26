"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useState } from "react";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export function VelocityScroll({
    text,
    default_velocity = 5,
    className,
  }: VelocityScrollProps) {
    function ParallaxText({
      children,
      baseVelocity = 100,
      className,
    }: ParallaxProps) {
      const { scrollY } = useScroll();
      const smoothScrollY = useSpring(scrollY, {
        damping: 50,
        stiffness: 400,
      });
  
      const [viewportWidth, setViewportWidth] = useState(0);
      const [documentHeight, setDocumentHeight] = useState(0);
  
      useEffect(() => {
        setViewportWidth(window.innerWidth);
        setDocumentHeight(document.body.scrollHeight);
      }, []);
  
      const x = useTransform(
        smoothScrollY,
        [0, documentHeight],
        [0, viewportWidth]
      );
  
      const invertedX = useTransform(
        smoothScrollY,
        [0, documentHeight],
        [0, -viewportWidth]
      );
  
      const moveX = default_velocity > 0 ? x : invertedX;
  
      return (
        <div className="w-full overflow-hidden whitespace-nowrap">
          <motion.div
            className={cn("inline-block", className)}
            style={{ x: moveX }}
          >
            <span>{children}</span>
          </motion.div>
        </div>
      );
    }
  
    return (
      <section className="relative w-full">
        <ParallaxText baseVelocity={Math.abs(default_velocity)} className={className}>
          {text}
        </ParallaxText>
      </section>
    );
  }
  
