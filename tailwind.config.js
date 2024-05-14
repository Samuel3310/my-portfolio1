/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#07beb8",
        sec: "#3dccc7",
        ter: "#68d8d6",
        per: "#9ceaef",
        light: "#c4fff9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
