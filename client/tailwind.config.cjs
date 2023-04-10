/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
      },
      height: {
        '55vh': '55vh', // definir el valor de 120 como 30rem
      },
      colors: {
        //picton-blue
        
        primary: {
          DEFAULT: "#38A1ED",
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
