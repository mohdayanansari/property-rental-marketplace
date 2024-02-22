import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-dark-1": "#0D0B21",
        "app-dark-2": "#15132B",
        "app-primary": "#211A75",
        "app-secondary": "#6418C3",
        "app-tertiary": "#7879F1",
        "app-accent-1": "#5ECFFF",
        "app-accent-2": "#E328AF",
        "app-accent-3": "#464366",
        "app-gray-1": "#A5A5A5",
        "app-gray-2": "#C4C4C4",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        sidebar: "18px 4px 35px 0px rgba(0, 0, 0, 0.15)",
        "large-card": "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
