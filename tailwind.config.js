/** @type {import('tailwindcss').Config} */
import palettes from './src/stories/global/base/colors.json';
import fonts from './src/stories/global/base/fonts.json';
import breakpoints from './src/stories/global/base/breakpoints.json';

let colors = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',  
};

let brandPalette = {};


Object.keys(palettes).forEach(key => {  
  const palette = palettes[key];
  const brandColors = palette.variants ? {
    DEFAULT: palette.default,      
    ...palette.variants,
  } : {
    DEFAULT: palette,      
  };
  brandPalette[key] = brandColors;
});





colors = {
  ...colors,
  ...brandPalette
};


module.exports = {
  content: ['./src/assets/js/**/*.js', './src/stories/{components,layout,pages}/**/*.{twig,js}'],  
  safelist: [
    'font-display',
    'font-body',
    'bg-secondary-100',
    'aspect-video'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },

    },
    screens: breakpoints,
    colors: colors,
    fontFamily: fonts,
  
   
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles

    }),
    // require('@tailwindcss/typography'),
  ]
}

