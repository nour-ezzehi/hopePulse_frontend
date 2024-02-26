/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81c230',
        secondary: '#aad573',
        grayish: '#36454F',
        fafafa: '#fafafa',
        third: '#d2cad1',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

