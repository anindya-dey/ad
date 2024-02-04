const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
  
        // default breakpoints but with 40px removed
        screens: {
          sm: "100%",
          md: "100%",
          lg: "992px",
          xl: "1280px",
        },
      },
      backgroundImage: {
        "homeBg": "url('/background/bg.jpg')",
        "homeBg-dark": "url('/background/bg-dark.jpg')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      }
    },
  },
  plugins: [],
};
