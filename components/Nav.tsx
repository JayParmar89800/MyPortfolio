"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8">
      {siteConfig.navItems.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path == pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.label}
          </Link>
        );
      })}
      <Link href="/contact">
        <Button>Hire me</Button>
      </Link>
    </nav>
  );
};

export default Nav;
