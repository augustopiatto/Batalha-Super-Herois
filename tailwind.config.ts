import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        content: "calc(100vh - 80px)",
      },
      boxShadow: {
        "card-highlight": "0 1px 8px 1px",
        "card-inner": "inset 0px -20px 0px 0px",
      },
      colors: {
        "black-light": "rgb(70, 72, 81)",
        black: "rgb(50, 52, 61)",
        "black-dark": "rgb(26, 27, 32)",
        white: "rgb(238, 238, 243)",
        grey: "rgb(220, 220, 226)",
        blue: "rgba(109, 145, 237, 0.6)",
        "blue-dark": "rgb(71, 117, 236)",
        red: "rgba(233, 101, 101, 0.6)",
        "red-dark": "rgb(198, 59, 50)",
        // verde
        success: "rgb(4, 218, 0)",
        // vermelho
        error: "rgb(232, 28, 0)",
        // amarelo-alaranjado
        warning: "rgb(212, 162, 31)",
      },
      screens: {
        "md-m": { max: "768px" },
        "sm-m": { max: "320px" },
      },
    },
  },
  plugins: [],
};
export default config;
