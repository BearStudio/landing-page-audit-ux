import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
        primary: "#FFFFFF",
        secondary: "#1d3974",
      },
      fontFamily: {
        TrashHand: ["TrashHand", "sans-serif"],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
