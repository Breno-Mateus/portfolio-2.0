/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#1f242d',
        colorSecondary: '#323946',
        colorStyle: '#6C63FF',
        colorWhite: '#fff',
        colorstyleSecondary: '#1b2669',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }
    },
  },
  plugins: [],
}

