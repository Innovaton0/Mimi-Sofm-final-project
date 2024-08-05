/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
<<<<<<< HEAD
    extend: {
      backgroundImage: {
        'PhotoHome': "url('/src/assets/pexels-photo-955938.jpeg')",
      fontFamily: {
        mont: ['"Montserrat"'],
      },
    },
  },
  plugins: [],
},
};

=======
    extend: {},
  },
  variants: {
    extend: {  
      fontFamily: {
      mont: ['"Montserrat"'],
    },
  },
  plugins: [],
}
}
>>>>>>> feat-marianto-tattoopage
