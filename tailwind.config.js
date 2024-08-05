<<<<<<< HEAD
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"'],
      },
    },
  },
  plugins: [],
};
=======

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'PhotoHome': "url('/src/assets/pexels-photo-955938.jpeg')",
      }
    },
  },
  plugins: [],
}

>>>>>>> feat-nacha-home
