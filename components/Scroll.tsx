"use client"
import React, { useEffect } from "react";
import {
  Link,
  Events,
  scrollSpy,
} from "react-scroll";

interface ScrollProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  onClick?: () => void; 
}

const Scroll: React.FC<ScrollProps> = ({
  to,
  children,
  className,
  offset = -100,
  duration = 500,
  onClick
}) => {
  useEffect(() => {
    // Registering scroll events
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    // Updating scrollSpy when the component mounts
    scrollSpy.update();

    // Cleanup function to remove the registered events when the component unmounts
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: any) => {};

  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={duration}
      onSetActive={handleSetActive}
      className={className}
      onClick={onClick} 
    >
      {children}
    </Link>
  );
};

export default Scroll;
