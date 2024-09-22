import type { Config } from "tailwindcss";

type AddUtilities = (
  utilities: Record<string, Record<string, string | number>>,
  variants?: string[]
) => void;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sentient: ["Sentient", "sans-serif"],
        sentient_italic: ["Sentient-Italic", "sans-serif"],
        aventa_bold: ["Aventa-Bold", "sans-serif"],
        aventa_Extrabold: ["Aventa-ExtraBold", "sans-serif"],
        aventa_ExtraLight: ["Aventa-ExtraLight", "sans-serif"],
        aventa_Light: ["Aventa-Light", "sans-serif"],
        aventa_Medium: ["Aventa-Medium", "sans-serif"],
        aventa: ["Aventa-Regular", "sans-serif"],
        aventa_Semibold: ["Aventa-SemiBold", "sans-serif"],
        aventa_Thin: ["Aventa-Thin", "sans-serif"],
        avenir_black: ["AvenirLTStd-Black", "sans-serif"],
        avenir: ["AvenirLTStd-Book", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        half: "50% 50%",
      },
      width: {
        "full-minus-10": "calc(100% - 10%)", // Custom width
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
