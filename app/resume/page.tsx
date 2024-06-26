"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";
import { about, education, experience, skills } from "@/config/site";
import { BorderBeam } from "@/components/magicui/border-beam";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold dark:text-white text-black">{experience.title}</h3>
                
                  {experience.description.map((description,index)=>{
                    return (
                      <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0">{description.paragraph}</p>
                    )
                  })}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border-[0.2px] dark:border-custom-dark border-custom-light dark:text-white text-black shadow-lg relative h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                        >
                          <span className="text-accent font-bold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-black">{item.company}</p>
                          </div>
                          <BorderBeam size={250} duration={7} delay={9} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold dark:text-white text-black">{education.title}</h3>
                <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border-[0.2px] dark:border-custom-dark border-custom-light dark:text-white text-black shadow-lg relative h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                        >
                          <span className="text-accent font-bold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-black">{item.intituation}</p>
                          </div>
                          <BorderBeam size={250} duration={7} delay={9} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left dark:text-white text-black">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px]">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider skipDelayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] border-[0.2px] dark:border-custom-dark border-custom-light shadow-lg relative rounded-xl flex justify-center items-center group overflow-hidden">
                              <div className="text-6xl group-hover:text-accent dark:text-white text-black transition-all duration-300">
                                {skill.icon}
                              </div>
                              <BorderBeam size={100} duration={7} delay={9} />

                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold dark:text-white text-black">{about.title}</h3>
                <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-start gap-4">
                        <span className="dark:text-white/60 text-black">{item.fieldname}</span>
                        <span className="dark:text-white text-black text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
