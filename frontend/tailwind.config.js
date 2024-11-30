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

      fontSize: {
        '10xl' : '10rem'
      },

      // animation: {
      //   marquee: 'marquee 10s linear infinite',
      // },

      // keyframes: {
      //   marquee: {
      //     '0%': { transform: 'translateX(100%)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },
    },
  },
  plugins: [],
}

