module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'button-primary': '#AD1FEA',
      'text-white': '#FFFFFF',
      'text-grey': '#F2F4FE',
      'bg-dark': '#373F68',
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
