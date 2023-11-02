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
        content: "calc(100vh - 66px)",
      },
      boxShadow: {
        "card-highlight": "0 8px 15px 3px rgb(0 0 0 / 0.7)",
      },
      colors: {
        good: "rgb(109, 145, 237)",
        "good-border": "rgb(71, 117, 236)",
        evil: "rgb(233, 101, 101)",
        "evil-border": "rgb(198, 59, 50)",
        success: "rgb(4, 218, 0)",
        error: "rgb(232, 28, 0)",
      },
    },
  },
  plugins: [],
};
export default config;
