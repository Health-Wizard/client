/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5856d6",
        text_gray: "#8087a1",
        border_gray: "#c7cad4",
        bg_gray: "#f5f9fa",
        input_field_gray: "#eeeeee",
        blue_shade_1: "#eff8ff",
        blue_shade_2: "#e1f2fd",
      },
      backgroundImage: {
        coming: "url('src/assets/images/comingsoon.png')",
      },
    },
  },
  plugins: [],
};
