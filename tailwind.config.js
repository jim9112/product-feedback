module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'button-primary': '#AD1FEA',
      'text-white': '#FFFFFF',
      'text-grey': '#F2F4FE',
      'text-secondary': '#3A4374',
      'text-secondary-light': '#647196',
      'text-blue': '#4661E6',
      'bg-dark': '#373F68',
    },
    fontFamily: {
      primary: ['Jost', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'header-mobile': "url('/suggestions/mobile/background-header.png')",
        'header-desktop': "url('/suggestions/desktop/background-header.png')",
        'header-tablet': "url('/suggestions/tablet/background-header.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
