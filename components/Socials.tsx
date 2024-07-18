import Link from "next/link";
import { Dock, DockIcon } from "./magicui/dock";
import Iconify from "./iconify/iconify";

const socials = [
  { icons: <Iconify icon="carbon:logo-github"/>, path: "https://github.com/JayParmar89800" },
  {
    icons: <Iconify icon="skill-icons:linkedin" />,
    path: "https://www.linkedin.com/in/jay-parmar-389483299/",
  },
  { icons:<Iconify icon="skill-icons:instagram" />, path: "https://www.instagram.com/jayparmar7232/" },
];
interface SocialsProps {
  containerStyle: string;
  iconStyles: string;
}
const Socials = ({ containerStyle, iconStyles }: SocialsProps) => {
  return (
      <Dock>
        {socials.map((item, index) => {
          return (
            <DockIcon key={index}>
              <Link
                target="_blank"
                href={item.path}
                className={iconStyles}
              >
               {item.icons}
              </Link>
            </DockIcon>
          );
        })}
      </Dock>
  );
};

export default Socials;
