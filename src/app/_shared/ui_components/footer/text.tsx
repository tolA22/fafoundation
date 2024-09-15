'use client'

import clsx from "clsx";
import {useRouter} from "next/navigation";

export interface IHeaderText {
  text: string;
  font?: "avenir" | "aventa";
  hide_mobile?: boolean;
  action?: () => void;
  footer?:boolean
  path?:string
}

export default function HeaderText({ text, hide_mobile }: IHeaderText) {
  return (
    <h3
      className={clsx("text-white text-sm leading-[20.02px] font-aventa", {
        "hidden lg:block": hide_mobile,
      })}
    >
      {text}
    </h3>
  );
}



export function HeaderSubText({ text, font,footer ,path }: IHeaderText) {
  const class_font: string = font ?? "aventa";
  const router = useRouter()
 function navigate(){
  if (footer && typeof path === 'string'){
    router.push(path)
  }
 }
  return (
    <h3
    onClick={navigate}
      className={`text-[#FFFFFFE5] leading-[22.88px] text-base font-${class_font}  tracking-tight ${footer && "transition-all duration-300 hover:text-[#EEA523] hover:underline cursor-pointer hover:scale-95 w-max" } `}
    >
      {text}
    </h3>
  );
}
