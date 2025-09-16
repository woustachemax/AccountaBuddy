/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [  "./app/**/*.{js,jsx,ts,tsx}",   
  "./components/**/*.{js,jsx,ts,tsx}", 
  "./*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#000000',
        secondary: '#FE7743',
        tertiary: '#E2DFD2'
      }
    },
  },
  plugins: [],
}