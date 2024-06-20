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
 keywords: "Frontend Developer, Web Developer, Portfolio, Animated Portfolio, Professional Web Design, Responsive Web Design, Single Page Applications, SPA Development, HTML/CSS Expert, JavaScript Developer, TypeScript Developer, Tailwind CSS, Best Developer Portfolio, Web Development Services, Git Version Control, Custom Web Solutions",
  navItems: [
    {
      label: "Home",
      path: "/",
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
      num: 607,
      text: "Code commits",
    },
  ],
  services: [
    {
      num: "01",
      title: "Responsive Web Design",
      href: "/services",
      description:
        "Responsive Web Design ensures websites adapt seamlessly to any device, providing an optimal user experience on desktops, tablets, and smartphones.",
    },
    {
      num: "02",
      title: "HTML/CSS Development",
      href: "/services",
      description:
        "HTML/CSS development involves creating the structure and style of web pages, ensuring they are both visually appealing and user-friendly. ",
    },
    {
      num: "03",
      title: "SPA Development",
      href: "/services",
      description:
        "SPA development focuses on creating dynamic web applications that operate within a single web page, providing a seamless and responsive user experience similar to desktop applications.",
    },
    {
      num: "04",
      title: "Version Control (Git)",
      href: "/services",
      description:
        "Version control with Git allows for efficient tracking and management of changes in code, enabling collaboration among developers and ensuring project integrity.",
    },
  ],
};

// about data
export const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis accusamus maxime placeat, cupiditate nam repellendus autem nemo eligendi voluptas culpa error! Blanditiis provident nobis accusamus molestiae et rem unde.",
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
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis accusamus maxime placeat, cupiditate nam repellendus autem nemo eligendi voluptas culpa error! Blanditiis provident nobis accusamus molestiae et rem unde.",
  items: [
    {
      company: "Sulok digital pvt ltd",
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
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis accusamus maxime placeat, cupiditate nam repellendus autem nemo eligendi voluptas culpa error! Blanditiis provident nobis accusamus molestiae et rem unde.",
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
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis accusamus maxime placeat, cupiditate nam repellendus autem nemo eligendi voluptas culpa error! Blanditiis provident nobis accusamus molestiae et rem unde.",
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
  ],
};
export const contact = {
  info: [
    {
      icon: ICONS.phone,
      title: "Phone",
      description: "(+91) 898 0063 045",
    },
    {
      icon: ICONS.email,
      title: "Email",
      description: "jayp89800@gmail.com",
    },
    {
      icon: ICONS.address,
      title: "Address",
      description: "Junagadh",
    },
  ],
};
