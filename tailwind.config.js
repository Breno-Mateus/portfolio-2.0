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
      }
    },
  },
  plugins: [],
}

