"use client";

import Form from "@/components/Form";
// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/config/site";
import { motion } from "framer-motion";

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
          <div className="xl:w-[54%] order-2 xl:order-none">
            {/* <form
              action=""
              className="flex flex-col gap-6 p-10 bg-bgdark rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                asperiores quas ad beatae nam, ratione, molestias odio libero
                quos laboriosam voluptatibus. A enim earum dolores sequi
                corrupti iure! Odio, voluptatem!
              </p>
              <div className="flex flex-col gap-6">
                <Input type="fullname" placeholder="Full name" />
                <Input type="email" placeholder="Email address" />
              </div>
              
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form> */}
            <Form/>
          </div>
          {/* info */}
          <div className="felx-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contact.info.map((item,index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] bg-bgdark text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
