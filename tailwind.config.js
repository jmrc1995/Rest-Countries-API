
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)/** @type {import('tailwindcss').Config} */




module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'lg': '1280px',

        'xl': '1920px'
        // => @media (min-width: 1280px) { ... }
      },
      colors:{
        'light-grey': '#2B3844',
        'dark-grey': '#202C36',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark-blue': '#2b3238',//dark-mode-elements
        'very-dark-blue': '#20262b',//dark-mode-background
        'very-dark-blue-text': '#111314',//light-mode-text
        'dark-gray': '#858585',//light-mode-input
        'very-light-grey' : '#FAFAFA',//light-mode-background




      }
    },
  },
  plugins: [],
};
