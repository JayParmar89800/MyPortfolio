import Link from 'next/link';
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa"

const socials=[
    {icons:<FaGithub/>,path:"https://github.com/JayParmar89800"},
    {icons:<FaLinkedin/>,path:"https://www.linkedin.com/in/jay-parmar-389483299/"},
    {icons:<FaInstagram/>,path:"https://www.instagram.com/jayparmar7232/"},
]
interface SocialsProps {
    containerStyle: string;
    iconStyles: string;
  }
const Socials = ({containerStyle,iconStyles}:SocialsProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((item,index)=>{
        return <Link key={index} target='_blank' href={item.path} className={iconStyles}>{item.icons}</Link>
      })}
    </div>
  )
}

export default Socials
