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
  },
};
export default config;
