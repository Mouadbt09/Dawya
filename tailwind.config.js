/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sec': ['Century-Gothic'],
        'primary': ['LemonMilk']
      },
      colors: {
        'org': {
          DEFAULT: '#f57120'
        },
        'grn': {
          DEFAULT: '#92C83E '
        },
        'gra': {
          DEFAULT: '#212529'
        },
        'lgra': {
          DEFAULT: '#6c757d'
        },
        'lw': {
          DEFAULT: '#E1E1E1'
        },
      },
      // backgroundImage: {
      //   'hero': "url('/img/10.jpg')",
      // },
    },
  },
  plugins: [],
}

