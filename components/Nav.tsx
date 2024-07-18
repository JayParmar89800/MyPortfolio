import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import Scroll from "./Scroll";

const Nav: React.FC = () => {
  return (
    <nav className="flex items-center gap-8">
      <ul className="flex items-center gap-8">
        {siteConfig.navItems.map((link) => (
          <li
            key={link.path}
            className="hover:text-accent hover:border-b-2 hover:border-accent"
          >
            <Scroll
              to={link.path.replace("/", "").toLowerCase()}
              className="capitalize font-medium hover:text-accent transition-all cursor-pointer"
            >
              {link.label}
            </Scroll>
          </li>
        ))}
        <Scroll to="contact">
          <Button>Hire me</Button>
        </Scroll>
      </ul>
    </nav>
  );
};

export default Nav;
