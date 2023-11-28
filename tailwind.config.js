/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5856d6",
        text_gray: "#8087a1",
        border_gray: "#c7cad4",
      },
    },
  },
  plugins: [],
};
