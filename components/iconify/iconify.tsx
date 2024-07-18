"use client"
import { CSSProperties } from "react";
import { Icon } from "@iconify/react"; // Assuming you use @iconify/react for icons

interface Props{
    icon:string,
    style?:CSSProperties,
    height?:number,
    width?:number
}

const Iconify = ({ icon, style ,height,width}:Props) => {
  return <Icon icon={icon} style={style} height={height} width={width}/>;
};

export default Iconify;
export { Icon as Iconifysingle };
