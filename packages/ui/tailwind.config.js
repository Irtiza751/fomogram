import twSharedConfig from "@fomogram/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [twSharedConfig],
};
