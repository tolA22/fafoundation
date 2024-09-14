import clsx from "clsx";

export interface IHeaderText {
  text: string;
  font?: "avenir" | "aventa";
  hide_mobile?: boolean;
  action?: () => void;
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

export function HeaderSubText({ text, font }: IHeaderText) {
  const class_font: string = font ?? "aventa";
  return (
    <h3
      className={`text-[#FFFFFFE5] leading-[22.88px] text-base font-${class_font} tracking-tight`}
    >
      {text}
    </h3>
  );
}
