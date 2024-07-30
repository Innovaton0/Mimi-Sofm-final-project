
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

