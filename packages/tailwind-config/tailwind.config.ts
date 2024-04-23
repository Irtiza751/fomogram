import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: "0.7rem",
        base: "0.9rem",
        xl: "1.2rem",
        "2xl": "1.5rem",
        "3xl": "1.700rem",
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
