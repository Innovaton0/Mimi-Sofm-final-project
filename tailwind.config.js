/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
<<<<<<< HEAD
      backgroundImage: {
        'PhotoHome': "url('/src/assets/pexels-photo-955938.jpeg')",
      fontFamily: {
        mont: ['"Montserrat"'],
      },
    },
=======
      fontFamily:{
        mont:["Montserrat"],
      }
    },
  },
  variants: {
    extend: {},
>>>>>>> feat-marianto-landingpage
  },
  plugins: [],
},
};

