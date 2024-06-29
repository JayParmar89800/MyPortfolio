"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger,SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8 my-auto ">
          {siteConfig.navItems.map((link, index) => {
            return (
              <SheetClose  key={index} asChild>
              <Link
                href={link.path}
                className={`${link.path==pathname && "!text-accent border-b-2 border-accent"} dark:text-white text-black text-xl capitalize hover:text-accent transition-all`}
              >
                {link.label}
              </Link>
              </SheetClose>
            );
          })}
           <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
