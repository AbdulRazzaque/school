/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/src/images/bg-1.jpg')",
        'subheaderbg': "url('/src/images/subheaderbg.jpg')",
        
      }

    },
  },
  plugins: [],
}