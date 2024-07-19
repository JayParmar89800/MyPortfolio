import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { ICONS } from "./icon";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jay Parmar",
  description: "Frontend Developer",
  keywords:
    "Frontend Developer, Web Developer, Portfolio, Animated Portfolio, Professional Web Design, Responsive Web Design, Single Page Applications, SPA Development, HTML/CSS Expert, JavaScript Developer, TypeScript Developer, Tailwind CSS, Best Developer Portfolio, Web Development Services, Git Version Control, Custom Web Solutions",
  navItems: [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Resume",
      path: "/resume",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ],
  state: [
    {
      num: 1,
      text: "Years of experience",
    },
    {
      num: 4,
      text: "Projects completed",
    },
    {
      num: 12,
      text: "Technologies mastered",
    },
    {
      num: 685,
      text: "Code commits",
    },
  ],
  services: [
    {
      num: "01",
      title: "Responsive Web Design",
      href: "/assets/services/Responsive-Web-Design.jpeg",
      description:
        "Responsive Web Design ensures websites adapt seamlessly to any device, providing an optimal user experience on desktops, tablets, and smartphones.",
    },
    {
      num: "02",
      title: "HTML/CSS Development",
      href: "/assets/services/HTMLCSS-Development.jpg",
      description:
        "HTML/CSS development involves creating the structure and style of web pages, ensuring they are both visually appealing and user-friendly. ",
    },
    {
      num: "03",
      title: "SPA Development",
      href: "/assets/services/SPA-Development.jpeg",
      description:
        "SPA development focuses on creating dynamic web applications that operate within a single web page, providing a seamless and responsive user experience similar to desktop applications.",
    },
    {
      num: "04",
      title: "Version Control (Git)",
      href: "/assets/services/Version-Control-(Git).png",
      description:
        "Version control with Git allows for efficient tracking and management of changes in code, enabling collaboration among developers and ensuring project integrity.",
    },
  ],
};

// about data
export const about = {
  title: "About me",
  description:
    "I am a passionate frontend developer dedicated to creating visually appealing and user-friendly web applications. As a speedy learner, I constantly seek to expand my knowledge and stay updated with the latest technologies and trends in the industry. I am always eager to learn more and enhance my skills to deliver the best possible solutions.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Jay Parmar",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+91) 898 0063 045",
    },
    {
      fieldname: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldname: "Skype",
      fieldValue: "jay123",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldname: "Email",
      fieldValue: "jayp89800@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldname: "Language",
      fieldValue: "English,Hindi,Gujarati",
    },
  ],
};

// experience data
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: [
    {
      paragraph:
        "As a frontend developer, my time with sulok digital solutions pvt. ltd. has been both rewarding and educational. I've gained a lot of knowledge and practical skills that have improved my abilities in web development.",
    },
    {
      paragraph:
        "I've not only strengthened my understanding of key frontend technologies but also learned a lot of extra information beyond the usual scope. This additional knowledge has been very valuable, giving me a broader perspective and better problem-solving skills.",
    },
    {
      paragraph:
        "Working in sulok digital solutions pvt. ltd.'s collaborative and innovative environment has been a constant source of motivation and learning. I've really enjoyed my experience here, and the skills and insights I've gained will definitely shape my future in frontend development.",
    },
  ],
  items: [
    {
      company: "sulok digital solutions pvt. ltd.",
      position: "Front-End developer",
      duration: "1 May 2023 - 1 May 2024",
    },
  ],
};
// education data
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have successfully completed my Secondary School Certificate (SSC) and Higher Secondary Certificate (HSC), which provided me with a solid foundation in core subjects and advanced studies. I then earned a Bachelor of Computer Applications (BCA) degree, where I gained in-depth knowledge and hands-on experience in computer applications, software development, and various aspects of IT. This comprehensive education has equipped me with the skills and expertise necessary for a successful career in technology and development.",
  items: [
    {
      intituation: "Sarswati Vidhyalay , Ashvanikumar,surat-8",
      degree: "SSC",
      duration: "2019 - 2020",
    },
    {
      intituation: "Sarswati Vidhyalay , Ashvanikumar,surat-8",
      degree: "HSC",
      duration: "2020 - 2021",
    },
    {
      intituation: "Dr Subhash College Of Computer Science",
      degree: "BCA",
      duration: "2021 - 2024",
    },
  ],
};
// skills
export const skills = {
  title: "My skills",
  description:"As a frontend developer, I am proficient in HTML5, CSS, and JavaScript for building dynamic web pages. I have experience with frameworks like Tailwind CSS, Bootstrap, React.js, and Next.js for efficient development. I also use NextUI and MUI for designing responsive interfaces and leverage GitHub for version control. Additionally, my design skills are supported by my proficiency in Figma for creating and prototyping user interfaces.",
  skilllist: [
    {
      icon: ICONS.html,
      name: "Html 5",
    },
    {
      icon: ICONS.css,
      name: "Css",
    },
    {
      icon: ICONS.js,
      name: "Javascript",
    },
    {
      icon: ICONS.tailwindcss,
      name: "Tailwind css",
    },
    {
      icon: ICONS.bootstrap,
      name: "Bootstrap",
    },
    {
      icon: ICONS.react,
      name: "React.js",
    },
    {
      icon: ICONS.nextjs,
      name: "Next.js",
    },
    {
      icon: ICONS.nextui,
      name: "NextUI",
    },
    {
      icon: ICONS.mui,
      name: "MUI",
    },
    {
      icon: ICONS.github,
      name: "Github",
    },
    {
      icon: ICONS.git,
      name: "Git",
    },
    {
      icon: ICONS.figma,
      name: "Figma",
    },
  ],
};
export const contact = {
  info: [
    {
      icon: "line-md:phone-call-twotone-loop",
      style:{ color: "#13ff0f" },
      title: "Phone",
      description: "(+91) 898 0063 045",
    },
    {
      icon: "logos:google-gmail",
      title: "Email",
      description: "jayp89800@gmail.com",
    },
    {
      icon: "logos:google-maps",
      title: "Address",
      description: "Junagadh",
    },
  ],
};
