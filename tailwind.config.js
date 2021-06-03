module.exports = {
  mode: 'jit', // just in time compiler
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // this cleans up any css we dont use
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // defining larger screen size break points
      screens: {
        '3xl': '2000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  corePlugins: {
    textOverflow: true,
  },
}
