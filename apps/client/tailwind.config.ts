import twSharedConfig from "@fomogram/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [twSharedConfig],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    animation: {
      fadein: "fadein 1s ease-in 1",
    },
    keyframes: {
      fadein: {
        "0%": {
          opacity: "0",
          transform: "scale(0.6)",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
    },
  },
};
export default config;
