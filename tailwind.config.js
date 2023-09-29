/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        modal: {
          dark: "#0000005f",
        },
      },
      width:{
        w48: '48%'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};

