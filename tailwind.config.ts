import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-gem": {
          "50": "#f3f1ff",
          "100": "#eae6ff",
          "200": "#d7d1ff",
          "300": "#baacff",
          "400": "#987dff",
          "500": "#7849ff",
          "600": "#6923ff",
          "700": "#5b12ef",
          "800": "#4c0ec9",
          "900": "#3c0d9a",
          "950": "#250570",
        },
      },
    },
  },
  plugins: [],
};
export default config;
