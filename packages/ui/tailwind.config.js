import twSharedConfig from "@fomogram/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [twSharedConfig],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadein: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
    },
  },
};
