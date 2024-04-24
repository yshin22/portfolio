/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        suisse: ['SuisseIntl-SemiBold']
      },

      colors: {
        "twitter-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
}

