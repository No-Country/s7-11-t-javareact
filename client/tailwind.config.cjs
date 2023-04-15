/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main-image": "url('./src/assets/images/mainBg.png')",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
      height: {
        "55vh": "55vh", // definir el valor de 120 como 30rem
      },
      colors: {
        //neon-carrot
        primary: {
          DEFAULT: "#FB923C",
          50: "#FFF7F0",
          100: "#FEEBDC",
          200: "#FDD5B4",
          300: "#FDBF8C",
          400: "#FCA864",
          500: "#FB923C",
          600: "#FA7305",
          700: "#C35A04",
          800: "#8C4103",
          900: "#552702",
          950: "#391A01",
        },
        //picton-blue
        secondary: {
          DEFAULT: "#59B0F0",
          50: "#ECF6FD",
          100: "#DCEEFC",
          200: "#BBDFF9",
          300: "#9ACFF6",
          400: "#79C0F3",
          500: "#59B0F0",
          600: "#38A1ED",
          700: "#1486D9",
          800: "#0F66A6",
          900: "#0A4772",
          950: "#083759",
        },
      },
    },
  },
  plugins: [],
};
