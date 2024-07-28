export interface IButtonColor {
  text?: string;
  bg?: string;
  border?: string;
}

export const BUTTON_COLOR_MAPPING: { [colorName: string]: IButtonColor } = {
  yellow: {
    text: "text-[#000000]",
    bg: "bg-[#EEA523]",
    border: "",
  },
  default: {
    text: "text-[#FFFFFF]",
    bg: "transparent",
    border: "border-[#FFFFFF]",
  },
};
