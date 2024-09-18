/** @type {import('tailwindcss').Config} */
import palettes from './src/stories/global/base/colors.json';

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
  content: ['./src/**/*.{html,js,twig}'],
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
    colors: colors,
  
   
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles

    }),
    // require('@tailwindcss/typography'),
  ]
}

