"use client";

import { motion } from "framer-motion";
import Form from "./Form";
import { contact } from "@/config/site";
import Iconify from "./iconify/iconify";
import Link from "next/link";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] ">
            <Form />
          </div>
          {/* info */}
          <div className="felx-1 flex items-center xl:justify-end mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contact.info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] border-[0.2px] dark:border-custom-dark border-custom-light shadow-lg text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        <Iconify icon={item.icon} style={item.style} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="dark:text-white/60 text-black">
                        {item.title}
                      </p>
                      {item.href ? (
                        <Link
                          target="blank"
                          href={item.href}
                          className="text-xl dark:text-white text-black"
                        >
                          {item.description}
                        </Link>
                      ) : (
                        <span className="text-xl dark:text-white text-black">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
